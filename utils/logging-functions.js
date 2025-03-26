const { typeColourSelector } = require('../utils/data-functions');
const colours = require('../data-files/colours');

const releaseLog = (pokemon, trainerName) => {
  const colour = typeColourSelector(pokemon);
  console.log(
    `\n\t${colours.trainerBorder(
      '=============================='
    )}\n\t${trainerName} sent out ${colour(
      pokemon.name
    )}!\n\t${colours.trainerBorder('==============================')}`
  );
};

const pokeballsLog = (trainer) => {
  const { pokeballRed } = colours;
  const pokeballArr = Array(trainer.belt.length).fill(pokeballRed('◯'));
  const missingPokeballsArray = Array(6 - trainer.belt.length).fill('◯');
  const pokeballs = pokeballArr.concat(missingPokeballsArray);
  console.log(`\n\t${trainer.name}\n\t${pokeballs.join(' ')}`);
};

const fightLog = (pokemon) => {
  const colour = typeColourSelector(pokemon);
  console.log(
    `\n\t${colours.battleBorder('==============================')}\n\t${colour(
      pokemon.name
    )} used ${colour(pokemon.move)}!\n\t${colours.battleBorder(
      '=============================='
    )}\n`
  );
};

const healthBar = ({ hitPoints, maxHitPoints, name }) => {
  const { fullHealth, highMidHealth, midHealth, lowHealth, fainted } = colours;

  const percentage = Math.round(((hitPoints / maxHitPoints) * 100) / 5) * 5;
  const remainingHealth = hitPoints <= 0 ? 0 : percentage / 5;

  const health = Array(remainingHealth).fill('█');
  const missingHealth = Array(20 - remainingHealth).fill('░');
  const healthDisplay = health.concat(missingHealth).join('');

  let colour;
  if (percentage > 90) colour = fullHealth;
  if (percentage <= 90 && percentage > 75) colour = highMidHealth;
  if (percentage <= 75 && percentage > 30) colour = midHealth;
  if (percentage <= 30 && percentage > 0) colour = lowHealth;
  if (percentage <= 0) colour = fainted;

  console.log(
    `\n\t${name}\n\t${colour(healthDisplay)}  ${
      hitPoints <= 0 ? 0 : hitPoints
    } / ${maxHitPoints}\n`
  );
};

module.exports = { releaseLog, pokeballsLog, fightLog, healthBar };
