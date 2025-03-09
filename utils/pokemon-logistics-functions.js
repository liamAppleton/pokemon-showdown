const catchPokemonForTrainer = (pokemonArr, pokeballArr) => {
  pokeballArr.forEach((pokeball, i) => {
    pokeball.catch(pokemonArr[i]);
  });
  return pokeballArr;
};

module.exports = { catchPokemonForTrainer };
