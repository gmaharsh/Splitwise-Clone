const { AuthenticationError } = require('apollo-server');
const Account = require('../../models/Account');
const checkAuth =  require('../../validators/check_auth')
const User = require('../../models/User');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Account.find().sort({ createdAt: -1 });
                console.log(posts)
                return posts
            } catch (err) {
                throw new Error(err)
            }
        },
        async getAccountDetails(_, { username }, context) {
            const user = checkAuth(context)
            try {
                const post = await Account.find({ lenderName: username })
                console.log(post)
                return post
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        addAmount: async(_, { amount, body, username}, context) => {
            const user = checkAuth(context)
            // console.log(user)
            if (body.trim() === '') {
                throw new Error('Post body must not be empty')
            }
            if (amount.trim() === '') {
                throw new Error('Amount must not be empty')
            }
            const lenderName = user.username;
            let borrowId;
            const lenderDetails = await Account.find({ lenderName })
            let borrower = await User.find({ username })
            console.log(borrower[0].username)
            if (!lenderDetails) {
                console.log("I am called")
                const newPost = new Account({
                    lenderName: user.username,
                    borrowName: borrower[0].username,
                    amountOwe: [
                        {
                            amount,
                            body,
                        }
                    ],
                    amountOweCount: amount,
                    createdAt: new Date(),
                    user: user.id
                });
                
                // console.log(newPost)

                const post = await newPost.save();

                return post
            } else {
                // console.log("lenderDetails:-", lenderDetails)
                // newAmount = amount + previousAmount;
                prevAmount = 0;
                lenderDetails.map(function (value) {
                    // console.log(value)
                    
                    if (value.borrowName === username) {
                        borrowId = value._id
                        value.amountOwe.map(amount => {
                            prevAmount += amount.amount;
                        })
                    }
                })
                console.log(typeof(amount))
                console.log(typeof(prevAmount.toString()))
                let newAmount = prevAmount + parseInt(amount)
                console.log("newAmount", newAmount)
                if (borrowId) {
                    // console.log("I am Called")
                    const post = await Account.findById(borrowId);
                    console.log(post)
                    if (post) {
                        post.amountOwe.unshift({
                            amount,
                            body,
                        })
                        post.amountOweCount = newAmount
                        await post.save();
                        return post;
                    }
                } else {
                    const newPost = new Account({
                        lenderName: user.username,
                        borrowName: borrower[0].username,
                        amountOwe: [
                            {
                                amount,
                                body,
                            }
                        ],
                        amountOweCount: amount,
                        createdAt: new Date(),
                        user: user.id
                    });
                    const post = await newPost.save();

                    return post
                }
            }
        }
    }
}