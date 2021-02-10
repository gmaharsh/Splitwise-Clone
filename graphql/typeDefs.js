const { gql } = require('apollo-server');

module.exports = gql`
    type Account{
        id:ID!,
        lenderName:String!,
        createdAt:String!,
        borrowName: String!,
        amountOwe:[owe]!
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
        name: String!,
        createdAt: String!
    }
    input RegisterInput{
        name:String!,
        password:String!,
        email:String!
    }, 
    type Query{
        getPosts:[Account]
        getUsers:[User]
        getAccountDetails(userID: ID!):Account
    },
    type Mutation{
        register(registerInput: RegisterInput) : User!
        login(email:String!, password:String!) : User!
        addAmount(body:String!, amount:String!, name:String!) : Account!
        createComment(postId: String!, body:String!): Account!
        deleteComment(postId:String!, commentId:ID!): Account!
    }
`;