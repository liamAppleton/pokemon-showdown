const pokemonLookup = (pokemonList, pokemonName) => {
  for (const [key, value] of Object.entries(pokemonList)) {
    if (key === pokemonName.toLowerCase()) return pokemonList[key];
  }
};

module.exports = { pokemonLookup };
