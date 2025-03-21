const { pokemon, pokeballs, potions } = require('./class-instances');
const { formatNames } = require('./utils');

const pokemonNameList = formatNames(pokemon, Object.keys(pokemon));
const playerPotions = [
  potions.smallPotion,
  potions.mediumPotion,
  potions.largePotion,
  potions.maxPotion,
];
const playerPokeballs = [
  pokeballs.pb1,
  pokeballs.pb2,
  pokeballs.pb3,
  pokeballs.pb4,
  pokeballs.pb5,
  pokeballs.pb6,
];
const computerPokeballs = [
  pokeballs.pb7,
  pokeballs.pb8,
  pokeballs.pb9,
  pokeballs.pb10,
  pokeballs.pb11,
  pokeballs.pb12,
];

module.exports = {
  pokemonNameList,
  pokemon, //! does this need exporting here?
  playerPotions,
  playerPokeballs,
  computerPokeballs,
};
