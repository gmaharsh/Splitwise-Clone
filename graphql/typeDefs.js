const { gql } = require('apollo-server');

module.exports = gql`
    type Account{
        id:ID!,
        lenderName:String!,
        createdAt:String!,
        borrowName: String!,
        amountOwe:[owe]!
        amountOweCount: String!,
    },
    type owe{
        id:ID!
        amount:Int!
        body:String!
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
        createComment(postId: String!, body:String!): Account!
        deleteComment(postId:String!, commentId:ID!): Account!
    }
`;