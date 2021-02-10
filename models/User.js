const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    createdAt: String
})

module.exports = model('User', UserSchema);