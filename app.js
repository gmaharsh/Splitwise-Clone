const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const { MONGODB } = require('./config');
const resolvers =  require('./graphql/resolvers/index');
const typeDefs = require('./graphql/typeDefs');
const cors = require('cors')

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({req})
})

//Database Connection
mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Conneted to Database")
}).catch((err) => {
    console.log("Err:-", err)
})

server.listen(PORT)
    .then(res => {
        console.log("Server is running at port")
    }) 