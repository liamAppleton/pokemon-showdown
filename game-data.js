const { pokemon } = require('./class-instances');
const { createPokemonNameList } = require('./utils');

const pokemonNameList = createPokemonNameList(pokemon);
console.log(pokemonNameList);
