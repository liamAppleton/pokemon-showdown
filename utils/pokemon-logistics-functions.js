const { pokemonLookup, deletePokemon } = require('./pokemon-data-functions');

const catchPokemonForTrainer = (pokemonArr, pokeballArr) => {
  pokeballArr.forEach((pokeball, i) => {
    pokeball.catch(pokemonArr[i]);
  });
  return pokeballArr;
};

const computerTeamSelection = (pokeballArr, pokemonObject) => {
  pokeballArr.forEach((pokeball) => {
    const pokemonNames = Object.keys(pokemonObject);
    const index = Math.floor(Math.random() * pokemonNames.length);
    const selectedPokemon = pokemonLookup(pokemonObject, pokemonNames[index]);

    pokeball.catch(selectedPokemon);

    deletePokemon(pokemonObject, selectedPokemon.name);
  });
  return pokeballArr;
};

const computerReleasePokemon = (pokeballArr) => {
  const index = Math.floor(Math.random() * pokeballArr.length);
  return pokeballArr[index].storedPokemon.name;
};

module.exports = {
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
};
