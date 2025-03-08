const inquirer = require('inquirer');
const { pokemonNameList } = require('./game-data');
const { deletePokemon } = require('./utils');

const initialSelection = async () => {
  const selectionQuestion = {
    type: 'list',
    name: 'selectedPokemon',
    message: 'Select a pokemon',
    choices: pokemonNameList,
    loop: true,
  };
  return inquirer.prompt(selectionQuestion).then(({ selectedPokemon }) => {
    deletePokemon(selectedPokemon);
    const index = pokemonNameList.indexOf(selectedPokemon);
    pokemonNameList.splice(index, 1);
  });
};

const main = async () => {
  let i = 0;
  while (i < 6) {
    await initialSelection();
    i++;
  }
};

main();
