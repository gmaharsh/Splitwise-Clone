const { gql } = require('apollo-server');

module.exports = gql`
    type Account{
        _id:ID!,
        user1:String!,
        user2: String!,
        amountOwe:[owe]!
        user1OweCount: Int!,
        user2OweCount: Int!,
        createdAt:String!,
    },
    type owe{
        id:ID!
        amount:Int!
        body:String!
        lenderName: String!
        borrowerName: String!
    }
    type User{
        id: ID!,
        email: String!,
        token: String!,
        username: String!,
        createdAt: String!
    }
    input RegisterInput{
        username:String!,
        password:String!,
        email:String!
    }, 
    type Query{
        getPosts:[Account]
        getUsers:[User]
        getAccountDetails(username: String!):[Account]
    },
    type Mutation{
        register(registerInput: RegisterInput) : User!
        login(email:String!, password:String!) : User!
        addAmount(body:String!, amount:String!, username:String!) : Account!
        # settleUpAmount(amount:String!, postID:String!):Account!
        settleUpAmount(postId: String!, amount:String!): Account!

    }
`;