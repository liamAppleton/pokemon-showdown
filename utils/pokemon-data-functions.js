const createPokemonNameList = (pokemonInstances) => {
  const arr = [];
  for (let [key, value] of Object.entries(pokemonInstances)) {
    console.log(key);
    arr.push(key);
  }
  return arr;
};

module.exports = { createPokemonNameList };
