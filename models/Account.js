const { model, Schema } = require('mongoose');

const AccountSchema = new Schema({
    lenderName: String,
    borrowName: String,
    createdAt:Date,
    amountOwe: [
        {
            amount: Number,
            body:String,
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = model('Post', AccountSchema);