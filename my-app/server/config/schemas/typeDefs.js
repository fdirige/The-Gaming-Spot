const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    game1: String!
    game2: String!
    game1_votes: Int
    game2_votes: Int
  }

  type Query {
    tech: [Game]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(game1: String!, tech2: String!): Matchup
    createVote(_id: String!, gameNum: Int!): Matchup
  }
`;

module.exports = typeDefs;