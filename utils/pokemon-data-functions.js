const pokemonLookup = (pokemonList, pokemonName) => {
  // console.log(pokemonList[pokemonName.toLowerCase()].type);
  return pokemonList[pokemonName.toLowerCase()];
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

module.exports = { pokemonLookup, deletePokemon, formatNames };
