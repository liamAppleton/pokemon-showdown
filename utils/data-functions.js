const colours = require('../data-files/colours.js');

const pokemonLookup = (pokemonList, pokemonName) => {
  return pokemonList[pokemonName.toLowerCase()];
};

const typeColourSelector = ({ type }) => {
  switch (type) {
    case 'Normal':
      return colours.normalColour;
    case 'Fire':
      return colours.fireColour;
    case 'Water':
      return colours.waterColour;
    case 'Grass':
      return colours.grassColour;
    case 'Electric':
      return colours.electricColour;
    case 'Flying':
      return colours.flyingColour;
    case 'Fighting':
      return colours.fightingColour;
  }
};

const deletePokemon = (pokemonList, pokemonName) => {
  delete pokemonList[pokemonName.toLowerCase()];
};

// capitalise first letter and add type emoji
const formatNames = (pokemonList, pokemonNames) => {
  return pokemonNames.map((currentPokemon) => {
    const type = pokemonLookup(pokemonList, currentPokemon).type;
    let emoji;
    if (type === 'Normal') emoji = '🐻';
    if (type === 'Fire') emoji = '🔥';
    if (type === 'Water') emoji = '🌊';
    if (type === 'Grass') emoji = '🍃';
    if (type === 'Electric') emoji = '⚡️';
    if (type === 'Flying') emoji = '🪽';
    if (type === 'Fighting') emoji = '🥊';

    return `${emoji} ${
      currentPokemon[0].toUpperCase() + currentPokemon.slice(1)
    }`;
  });
};

module.exports = {
  pokemonLookup,
  typeColourSelector,
  deletePokemon,
  formatNames,
};
