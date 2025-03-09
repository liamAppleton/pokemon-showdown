const {
  pokemonLookup,
  deletePokemon,
  formatNames,
} = require('./pokemon-data-functions');
const {
  catchPokemonForTrainer,
  computerTeamSelection,
} = require('./pokemon-logistics-functions');

module.exports = {
  pokemonLookup,
  deletePokemon,
  formatNames,
  catchPokemonForTrainer,
  computerTeamSelection,
};
