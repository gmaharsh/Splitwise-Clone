const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config')

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;

    if (authHeader) {
        //Bearer...
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, JWT_SECRET);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/ Expired Token')
            }
        }
        throw new Error('Auth Token must be invalid')
    }
    throw new Error('Authentication Header is wrong')
}