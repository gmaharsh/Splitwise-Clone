const { UserInputError } = require('apollo-server');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validateRegisterInput, validateLoginInput } = require('../../validators/validators');

function generateToken(user) {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    }, JWT_SECRET, { expiresIn: '1h' })
    return token;
}

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key:"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",
//     }
// }))

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

module.exports = {
    Query: {
        async getUsers() {
            try {
                const users = await User.find();
                return users
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        async login(_, { email, password }) {

            const { errors, valid } = validateLoginInput(email, password); 
            if (!valid) {
                throw new UserInputError('Errors', {error})
            }

            const user = await User.findOne({ email });
            if (!user) {
                errors.general = "User not found with particular mail id";
                throw new UserInputError('Wrong Crendentials', {errors})
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = "Wrong Crendentials";
                throw new UserInputError('Wrong Crendentials', {errors})
            }

            const token = generateToken(user)

            return {
                ...user._doc,
                id: user._id,
                token
            }

            
        },
        async register(_, { registerInput: { username, email, password } }, context, info) {

            const { valid, errors } = validateRegisterInput(username, email, password)
            if (!valid) {
                throw new UserInputError('Errors', {errors})
            }

            const user = await User.findOne({ email });
            if (user) {
                throw new UserInputError('Particular Email Already Exists', {
                    errors: {
                        email:'Particular Email Already Exists'
                    }
                })
            }
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                username,
                email,
                password,
                createdAt: new Date().toISOString(),
            })

            console.log(newUser)

            const res = await newUser.save();
            
            const token = generateToken(res);

            if (token) {
                console.log(newUser.email)
                const msg = {
                    to: 'newUser.email', // Change to your recipient
                    from: 'mgheewala@hawk.iit.edu', // Change to your verified sender
                    subject: 'Sending with SendGrid is Fun',
                    text: 'and easy to do anywhere, even with Node.js',
                    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                }
                transporter
                    .send(msg)
                    .then(() => {
                        console.log('Email sent')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
}