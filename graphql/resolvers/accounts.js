const { AuthenticationError } = require('apollo-server');
const Account = require('../../models/Account');
const checkAuth =  require('../../validators/check_auth')
const User = require('../../models/User');


module.exports = {
    Query: {
        
    },
    Mutation: {
        async addAmount(_, { amount, body, username }, context) {
            const user = checkAuth(context)
            console.log(user)
            if (body.trim() === '') {
                throw new Error('Post body must not be empty')
            }
            if (amount.trim() === '') {
                throw new Error('Amount must not be empty')
            }

            const lender = await Account.findById(user._id) 
            console.log("Lender:-", lender)
            const borrower = await User.find({ username })
            console.log("Borrower:-", borrower)
            if (!lender) {
                const newPost = new Account({
                    username: user.username,
                    borrower: borrower[0]._id,
                    amountOwe: [
                        {
                            amount,
                            body,
                            borrower: username,
                        }
                    ],
                    createdAt: new Date()

                }); 

                const post = await newPost.save();

                return post
            }
        }
    }
}