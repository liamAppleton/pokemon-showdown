const {
  pokemonLookup,
  typeColourSelector,
  deletePokemon,
  formatNames,
  selectComputerName,
} = require('./data-functions');
const {
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
} = require('./logistics-functions');
const {
  releaseLog,
  pokeballsLog,
  fightLog,
  healthBar,
  trainerCardLog,
} = require('./logging-functions');

module.exports = {
  pokemonLookup,
  typeColourSelector,
  deletePokemon,
  formatNames,
  selectComputerName,
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
  releaseLog,
  pokeballsLog,
  fightLog,
  healthBar,
  trainerCardLog,
};
