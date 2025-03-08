const { pokemon } = require('../class-instances');

const pokemonLookup = (pokemonList, pokemonName) => {
  for (const [key, _] of Object.entries(pokemonList)) {
    if (key === pokemonName.toLowerCase()) return pokemonList[key];
  }
};

const deletePokemon = (pokemonList, pokemonName) => {
  for (const [key, _] of Object.entries(pokemonList)) {
    if (key === pokemonName.toLowerCase()) delete pokemonList[key];
  }
};

module.exports = { pokemonLookup, deletePokemon };
