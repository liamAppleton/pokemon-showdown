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

module.exports = { pokemonLookup, deletePokemon };
