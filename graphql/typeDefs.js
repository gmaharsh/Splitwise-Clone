const { gql } = require('apollo-server');

module.exports = gql`
    type Account{
        id:ID!,
        body:String!,
        createdAt:String!,
        username: String!,
        amountOwe:[owe]!
    },
    type owe{
        id:ID!
        amount:Int!
        body:String!
        borrower:String!
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
        getPost(transcationId: ID!):Account
    },
    type Mutation{
        register(registerInput: RegisterInput) : User!
        login(email:String!, password:String!) : User!
        addAmount(body:String!, amount:String!, username:String!) : Account!
        createComment(postId: String!, body:String!): Account!
        deleteComment(postId:String!, commentId:ID!): Account!
    }
`;