const { model, Schema } = require('mongoose');

const AccountSchema = new Schema({
    username: String,
    createdAt:Date,
    amountOwe: [
        {
            amount: Number,
            body:String,
            borrower: String,
            createdAt: String
        }
    ],
    borrower: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = model('Post', AccountSchema);