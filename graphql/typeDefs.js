const { gql } = require('apollo-server');

module.exports = gql`
    type Account{
        id: ID!,
        body: String!,
        amount: Int!,
        username: String!,
    },
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
        confirmPassword:String!
        email:String!
    }, 
    type Query{
        getPosts:[Account]
        getPost(transcationId: ID!):Account
    },
    type Mutation{
        register(registerInput: RegisterInput) : User!
        login(username:String!, password:String!) : User!
    }
`;