const { AuthenticationError } = require('apollo-server');
const Account = require('../../models/Account');
const checkAuth =  require('../../validators/check_auth')
const User = require('../../models/User');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Account.find().sort({ createdAt: -1 });
                // console.log(posts)
                return posts
            } catch (err) {
                throw new Error(err)
            }
        },
        async getAccountDetails(_, { username }, context) {
            const user = checkAuth(context)
            try {
                const post = await Account.find({ user2: username })
                const post1 = await Account.find({ user1 :username })
                if (post1) {
                    post1.map(postValues => {
                        post.push(postValues)
                    })
                }
                // console.log("Post:-", post)
                return post
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        settleUpAmount: async (_, { postId, amount }, context) => {
            const user = checkAuth(context)
            
            if (amount.trim() === '') {
                throw new Error('Amount must not be empty')
            }

            console.log(amount)
            const post = await Account.findById(postId);
            console.log(post)
            post.user1OweCount -= parseInt(amount);
            post.user2OweCount += parseInt(amount);
            console.log(post)
            await post.save();
            return post;
            // if (post) {
            //     post.comments.unshift({
            //         body,
            //         username: user.username,
            //         createdAt: new Date()
            //     })
            //     await post.save();
            //     return post;
            // } else {
            //     throw new UserInputError('Post not found')
            // }
        },
        addAmount: async(_, { amount, body, username}, context) => {
            const user = checkAuth(context)
            if (body.trim() === '') {
                throw new Error('Post body must not be empty')
            }
            if (amount.trim() === '') {
                throw new Error('Amount must not be empty')
            }

            let user1 = user.username;
            let user2 = username;
            console.log(user1)
            console.log(user2)
            let postId = ""
            let u1 = await Account.find({ user1 })
            if (u1) {
                u1.map(user => {
                    if (user.user2 == user2) {
                        postId = user._id
                    }
                })
            }
            let u2 = await Account.find({ user2: user1 })
            if (u2) {
                u2.map(user => {
                    if (user.user1 == user2) {
                        postId = user._id
                    }
                })
            }
            

            if (!postId) {
                console.log("No Transaction Found for this user")
                const newPost = new Account({
                    user1: user1,
                    user2: user2,
                    amountOwe: [
                        {
                            amount,
                            body,
                            lenderName: user1,
                            borrowerName: user2
                        }
                    ],
                    user1OweCount: amount,
                    user2OweCount: -amount,
                    createdAt: new Date(),
                    user: user.id
                });
                console.log(newPost)
                await newPost.save();
                return newPost;
            } else {
                const post = await Account.findById(postId)
                let newUser1OweCount = post.user1OweCount;
                let newUser2OweCount = post.user2OweCount;
                if (post.user1 == user1) {
                    newUser1OweCount += parseInt(amount);
                    newUser2OweCount -= parseInt(amount);
                    console.log(newUser1OweCount)
                    console.log(newUser2OweCount)
                    post.amountOwe.unshift({
                        amount,
                        body,
                        lenderName: user1,
                        borrowerName: user2
                    })
                    post.user1OweCount = newUser1OweCount
                    post.user2OweCount = newUser2OweCount
                    
                    await post.save();
                    return post;
                } else {
                    console.log("Different User Adding Transaction")
                    let newUser1OweCount = post.user2OweCount;
                    let newUser2OweCount = post.user1OweCount;
                    newUser1OweCount += parseInt(amount);
                    newUser2OweCount -= parseInt(amount);
                    post.amountOwe.unshift({
                        amount,
                        body,
                        lenderName: user1,
                        borrowerName: user2
                    })
                    post.user1OweCount = newUser2OweCount
                    post.user2OweCount = newUser1OweCount
                    await post.save();
                    return post;
                }
            }
        },
        
    }
}