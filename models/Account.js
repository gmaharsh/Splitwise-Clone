const { model, Schema } = require('mongoose');

const AccountSchema = new Schema({
    id:String,
    user1: String,
    user2: String,
    createdAt:Date,
    amountOwe: [
        {
            amount: Number,
            body: String,
            lenderName: String,
            borrowerName: String,
        }
    ],
    user1OweCount: Number,
    user2OweCount: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = model('Post', AccountSchema);