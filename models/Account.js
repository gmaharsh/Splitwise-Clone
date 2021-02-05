const { model, Schema } = require('mongoose');

const AccountSchema = new Schema({
    username: String,
    body: String,
    createdAt:String,
    amountOwe: [
        {
            amount: Integer,
            username: String,
            createdAt: String
        }
    ],
    amountOwed: [
        {
            amount: Integer,
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = model('Post', postSchema);