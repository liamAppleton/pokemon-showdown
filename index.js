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
    const index = pokemonNameList.indexOf(selectedPokemon);
    pokemonNameList.splice(index, 1); // remove from name list

    const emojiRemovedName = selectedPokemon.match(/[a-z]+/i)[0];
    deletePokemon(emojiRemovedName);
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
