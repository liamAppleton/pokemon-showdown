const {
  pokemonLookup,
  typeColourSelector,
  deletePokemon,
  formatNames,
} = require('./data-functions');
const {
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
} = require('./logistics-functions');
const { releaseLog, fightLog } = require('./logging-functions');

module.exports = {
  pokemonLookup,
  typeColourSelector,
  deletePokemon,
  formatNames,
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
  releaseLog,
  fightLog,
};
