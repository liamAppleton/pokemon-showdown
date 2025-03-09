const { Trainer } = require('./classes');
const {
  getPlayerName,
  initialSelection,
  playerSelections,
} = require('./inquirer-prompts');
const { catchPokemonForTrainer } = require('./utils');
const {
  playerPotions,
  playerPokeballs,
  computerPokeballs,
} = require('./game-data');

let playerName;
let player, computer;

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
};

main();
