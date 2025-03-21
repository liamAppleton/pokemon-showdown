const inquirer = require('inquirer');
const { pokemon } = require('./class-instances');
const { pokemonNameList } = require('./game-data');
const { deletePokemon, pokemonLookup } = require('./utils');

const playerSelections = [];

const getPlayerName = async () => {
  const { chosenName } = await inquirer.prompt({
    type: 'String',
    name: 'chosenName',
    message: 'What is your name?',
  });
  return chosenName;
};

const initialSelection = async () => {
  const { selectedPokemon } = await inquirer.prompt({
    type: 'list',
    name: 'selectedPokemon',
    message: 'Select a Pokemon: ',
    choices: pokemonNameList,
    loop: true,
  });
  const index = pokemonNameList.indexOf(selectedPokemon);
  pokemonNameList.splice(index, 1); // remove from name list

  const emojiRemovedName = selectedPokemon.match(/[a-z]+/i)[0];
  playerSelections.push(pokemonLookup(pokemon, emojiRemovedName));

  deletePokemon(pokemon, emojiRemovedName); // remove from pokemon object
};

const playerReleasePokemon = async (playerBelt) => {
  const pokemonNames = playerBelt.map(({ storedPokemon: { name } }) => {
    return name;
  });
  const { selectedPokemon } = await inquirer.prompt({
    type: 'list',
    name: 'selectedPokemon',
    message: 'Release a Pokemon to fight!',
    choices: pokemonNames,
    loop: true,
  });
  return selectedPokemon;
};

const playerTurn = async () => {
  const { playerMove } = await inquirer.prompt({
    type: 'list',
    name: 'playerMove',
    message: 'What would you like to do?',
    choices: ['FIGHT', 'POKéMON', 'BAG', 'RUN'],
    loop: true,
  });
  return playerMove;
};

const playerTurnPokemon = async (currentPokemon, playerBelt) => {
  const pokemonNames = playerBelt
    .map(({ storedPokemon: { name } }) => {
      return name;
    })
    .filter((pokemonName) => pokemonName !== currentPokemon);
  const { selectedPokemon } = await inquirer.prompt({
    type: 'list',
    name: 'selectedPokemon',
    message: 'Choose a new Pokemon?',
    choices: [...pokemonNames, '> BACK <'],
    loop: true,
  });
  return selectedPokemon;
};

const playerTurnBag = async (playerBag) => {
  const potionNames = playerBag.map(({ name }) => {
    return name;
  });
  const { selectedPotion } = await inquirer.prompt({
    type: 'list',
    name: 'selectedPotion',
    message: 'Select a potion:',
    choices: [...potionNames, '> BACK <'],
    loop: true,
  });

  return selectedPotion;
};

module.exports = {
  getPlayerName,
  initialSelection,
  playerSelections,
  playerReleasePokemon,
  playerTurn,
  playerTurnPokemon,
  playerTurnBag,
};
