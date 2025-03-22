const { typeColourSelector } = require('../utils/data-functions');

const computerReleaseLog = (pokemon, computerName) => {
  const colour = typeColourSelector(pokemon);
  console.log(`${computerName} sent out ${colour(pokemon.name)}!`);
};

module.exports = { computerReleaseLog };
