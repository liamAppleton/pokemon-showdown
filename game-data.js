const { pokemon } = require('./class-instances');
const {} = require('./utils');

let pokemonNameList;

const createData = () => {
  pokemonNameList = Object.keys(pokemon);
};

createData();

module.exports = { pokemonNameList, pokemon };
