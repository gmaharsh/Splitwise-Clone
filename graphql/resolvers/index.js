const accountsresolvers = require('./accounts');
const usersResolvers = require('./user');

module.exports = {
    Query: {
        ...accountsresolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...accountsresolvers.Mutation
    }
}