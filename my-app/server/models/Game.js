const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  gameId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  released: {
    type: String,
  },
  genre: [
    {
      type: String,
    },
  ],
  platform: [
    {
      type: String,
    },
  ],
  screenshot: [
    {
      type: String,
    },
  ],
  
});

const Game = model('Game', gameSchema);

module.exports = Game;

 