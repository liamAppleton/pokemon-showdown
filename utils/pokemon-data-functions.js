const { pokemon } = require('../class-instances');

const pokemonLookup = (pokemonList, pokemonName) => {
  for (const [key, _] of Object.entries(pokemonList)) {
    if (key === pokemonName.toLowerCase()) return pokemonList[key];
  }
};

const deletePokemon = (pokemonName) => {
  for (const [key, _] of Object.entries(pokemon)) {
    if (key === pokemonName.toLowerCase()) delete pokemon[key];
  }
};

// capitalise first letter and add type emoji
const formatNames = (pokemonNames) => {
  return pokemonNames.map((currentPokemon) => {
    const type = pokemonLookup(pokemon, currentPokemon).type;
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

module.exports = { pokemonLookup, deletePokemon, formatNames };
