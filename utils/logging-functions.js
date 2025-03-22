const { typeColourSelector } = require('../utils/data-functions');
const colours = require('../data-files/colours');

const releaseLog = (pokemon, trainerName) => {
  const colour = typeColourSelector(pokemon);
  console.log(
    `\n\t${colours.trainerBorder(
      '================================'
    )}\n\t${trainerName} sent out ${colour(
      pokemon.name
    )}!\n\t${colours.trainerBorder('================================')}\n`
  );
};

module.exports = { releaseLog };
