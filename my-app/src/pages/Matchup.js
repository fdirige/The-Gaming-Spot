import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GAME } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';

const Matchup = () => {
  const { loading, data } = useQuery(QUERY_GAME);

  const gameList = data?.game || [];

  const [formData, setFormData] = useState({
    game1: 'JavaScript',
    game2: 'JavaScript',
  });
  let navigate = useNavigate();

  const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createMatchup({
        variables: { ...formData },
      });

      navigate(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      game1: 'JavaScript',
      game2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>Game 1: </label>
            <select name="game1" onChange={handleInputChange}>
              {gameList.map((game) => {
                return (
                  <option key={game._id} value={game.name}>
                    {game.name}
                  </option>
                );
              })}
            </select>
            <label>Game 2: </label>
            <select name="game2" onChange={handleInputChange}>
              {gameList.map((game) => {
                return (
                  <option key={game._id} value={game.name}>
                    {game.name}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger" type="submit">
              Create Matchup!
            </button>
          </form>
        )}
      </div>
      {error && <div>Error</div>}
    </div>
  );
};

export default Matchup;