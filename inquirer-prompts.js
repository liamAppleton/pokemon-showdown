const inquirer = require('inquirer');
const { pokemon } = require('./class-instances');
const { pokemonNameList } = require('./game-data');
const { deletePokemon, pokemonLookup } = require('./utils');

const playerSelections = [];

const getPlayerName = () => {
  const nameQuestion = {
    type: 'String',
    name: 'chosenName',
    message: 'What is your name?',
  };
  return inquirer.prompt(nameQuestion).then(({ chosenName }) => {
    return chosenName;
  });
};

const initialSelection = () => {
  const selectionQuestion = {
    type: 'list',
    name: 'selectedPokemon',
    message: 'Select a pokemon: ',
    choices: pokemonNameList,
    loop: true,
  };
  return inquirer.prompt(selectionQuestion).then(({ selectedPokemon }) => {
    const index = pokemonNameList.indexOf(selectedPokemon);
    pokemonNameList.splice(index, 1); // remove from name list

    const emojiRemovedName = selectedPokemon.match(/[a-z]+/i)[0];
    playerSelections.push(pokemonLookup(pokemon, emojiRemovedName));

    deletePokemon(pokemon, emojiRemovedName); // remove from pokemon object
  });
};

module.exports = {
  getPlayerName,
  initialSelection,
  playerSelections,
};
