const { Trainer, Battle } = require('./classes');
const {
  getPlayerName,
  initialSelection,
  playerSelections,
  playerReleasePokemon,
  playerTurnSelection,
} = require('./inquirer-prompts');
const {
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
} = require('./utils');
const {
  playerPotions,
  playerPokeballs,
  computerPokeballs,
  pokemon,
} = require('./game-data');

let playerName;
let player, computer;
let battle;
let gameOver = false;

const main = async () => {
  playerName = await getPlayerName();

  let i = 0;
  while (i < 6) {
    await initialSelection();
    i++;
  }

  // initialise player
  player = new Trainer(playerName, false);
  player.belt = catchPokemonForTrainer(playerSelections, playerPokeballs);
  player.bag = playerPotions;

  // initialise computer
  computer = new Trainer('Computer', true);
  computer.belt = computerTeamSelection(computerPokeballs, pokemon);

  // initialise battle and add selected pokemon to fight
  battle = new Battle(player, computer);
  const computerSentOut = computerReleasePokemon(computer.belt);
  const playerSentOut = await playerReleasePokemon(player.belt);
  battle.selectPokemon(player, playerSentOut);
  battle.selectPokemon(computer, computerSentOut);

  //! next you need to create a round() inquirer prompt
  //! remember you're in a branch/ticket now not main!!
  round();
};

const round = async () => {
  while (!gameOver) {
    const playerMove = await playerTurnSelection();

    // make prompt functions for each of these
    if (playerMove === 'FIGHT') {
    }

    if (playerMove === 'POKéMON') {
    }

    if (playerMove === 'BAG') {
    }

    if (playerMove === 'RUN') {
      gameOver = true;
    }
  }
};

main();
