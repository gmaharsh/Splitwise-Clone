const { model, Schema } = require('mongoose');

const AccountSchema = new Schema({
    id: String,
    lenderName: String,
    borrowName: String,
    createdAt:Date,
    amountOwe: [
        {
            amount: Number,
            body:String,
        }
    ],
    amountOweCount: String,
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = model('Post', AccountSchema);