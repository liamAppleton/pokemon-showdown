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

const fightLog = (pokemon) => {
  const colour = typeColourSelector(pokemon);
  console.log(
    `\n\t${colours.battleBorder(
      '================================'
    )}\n\t${colour(pokemon.name)} used ${colour(
      pokemon.move
    )}!\n\t${colours.battleBorder('================================')}\n`
  );
};

module.exports = { releaseLog, fightLog };
