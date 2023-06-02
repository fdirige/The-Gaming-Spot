import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($game1: String!, $game2: String!) {
    createMatchup(game1: $game1, game2: $game2) {
      _id
      game1
      game2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $gameNum: Int!) {
    createVote(_id: $_id, gameNum: $gameNum) {
      _id
      game1
      game2
      game1_votes
      game2_votes
    }
  }
`;