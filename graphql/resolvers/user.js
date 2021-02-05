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
        username: user.username
    }, JWT_SECRET, { expiresIn: '1h' })
    return token;
}

module.exports = {
    Mutation: {
        async login(_, { username, password }) {

            const { errors, valid } = validateLoginInput(username, password); 
            if (!valid) {
                throw new UserInputError('Errors', {error})
            }

            const user = await User.findOne({ username });
            if (!user) {
                errors.general = "User not found";
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
        async register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {

            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)
            if (!valid) {
                throw new UserInputError('Errors', {errors})
            }

            const user = await User.findOne({ username });
            if (user) {
                throw new UserInputError('Username is already taken', {
                    errors: {
                        username:'This username is already taken'
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