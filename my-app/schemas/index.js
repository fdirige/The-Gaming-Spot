const { gql } = require('apollo-server-express');

// Import your typeDefs from separate files
const typeDefs = require('./typeDefs');

// Import your resolvers from separate files
const resolvers = require('./resolvers');

module.exports = {
  typeDefs,
  resolvers,
};
