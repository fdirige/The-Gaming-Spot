const db = require('../config/connection');
const { Game } = require('../models');

const gameData = require('./gameData.json');

db.once('open', async () => {
  await Game.deleteMany({});

  // eslint-disable-next-line no-unused-vars
  const technologies = await Game.insertMany(gameData);

  console.log('Games seeded!');
  process.exit(0);
});