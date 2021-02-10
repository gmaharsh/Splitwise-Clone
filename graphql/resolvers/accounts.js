const { AuthenticationError } = require('apollo-server');
const Account = require('../../models/Account');
const checkAuth =  require('../../validators/check_auth')
const User = require('../../models/User');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Account.find().sort({createdAt: -1});
                return posts
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addAmount: async(_, { amount, body, username}, context) => {
            const user = checkAuth(context)
            if (body.trim() === '') {
                throw new Error('Post body must not be empty')
            }
            if (amount.trim() === '') {
                throw new Error('Amount must not be empty')
            }
            const lenderName = user.username;
            let borrowId;
            const lenderDetails = await Account.find({ lenderName })
            console.log(lenderDetails)
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
                    createdAt: new Date(),
                    user: user.id
                });
                
                console.log(newPost)

                const post = await newPost.save();

                return post
            } else {
                lenderDetails.map(function (value) {
                    console.log(value)
                    if (value.borrowName === username) {
                        borrowId =  value._id
                    }
                })
                // console.log(borrowId)
                if (borrowId) {
                    console.log("I am Called")
                    const post = await Account.findById(borrowId);
                    if (post) {
                        post.amountOwe.unshift({
                            amount,
                            body,
                        })
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