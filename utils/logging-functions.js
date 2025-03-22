const { typeColourSelector } = require('../utils/data-functions');

const releaseLog = (pokemon, trainerName) => {
  const colour = typeColourSelector(pokemon);
  console.log(`${trainerName} sent out ${colour(pokemon.name)}!`);
};

module.exports = { releaseLog };
