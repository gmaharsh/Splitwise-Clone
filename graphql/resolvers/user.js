const { UserInputError } = require('apollo-server');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const { validateRegisterInput, validateLoginInput } = require('../../validators/validators');

function generateToken(user) {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, JWT_SECRET, { expiresIn: '1h' })
    return token;
}

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
        async register(_, { registerInput: { name, email, password } }, context, info) {

            const { valid, errors } = validateRegisterInput(name, email, password)
            if (!valid) {
                throw new UserInputError('Errors', {errors})
            }

            const user = await User.findOne({ email });
            if (user) {
                throw new UserInputError('Particular Email Already Exists', {
                    errors: {
                        username:'Particular Email Already Exists'
                    }
                })
            }
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                name,
                email,
                password,
                createdAt: new Date().toISOString(),
            })

            const res = await newUser.save();

            const token = generateToken(res);

            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
}