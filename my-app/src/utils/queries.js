import { gql } from '@apollo/client';

export const QUERY_GAME = gql`
  query game {
    game {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      game1
      game2
      game1_votes
      game2_votes
    }
  }
`;