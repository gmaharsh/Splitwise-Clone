const accountsresolvers = require('./accounts');
const usersResolvers = require('./user');

module.exports = {
    Query: {
        ...accountsresolvers.Query,
        ...usersResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...accountsresolvers.Mutation
    }
}