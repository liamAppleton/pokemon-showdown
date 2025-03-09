const { pokemon } = require('./class-instances');
const { formatNames } = require('./utils');

const pokemonNameList = formatNames(Object.keys(pokemon));

module.exports = { pokemonNameList, pokemon };
