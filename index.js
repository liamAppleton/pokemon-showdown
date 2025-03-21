const { Trainer, Battle } = require('./classes');
const {
  getPlayerName,
  initialSelection,
  playerSelections,
  playerReleasePokemon,
  playerTurn,
  playerTurnPokemon,
  playerTurnBag,
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
    const playerMove = await playerTurn();

    if (playerMove === 'FIGHT') {
      const { playerPokemon, computerPokemon } = battle;
      console.log(playerPokemon, computerPokemon);
      battle.fight(playerPokemon, computerPokemon, computer);
      console.log(playerPokemon, computerPokemon);
    }

    if (playerMove === 'POKéMON') {
      const newPokemon = await playerTurnPokemon(player.belt);

      if (newPokemon !== '> BACK <') {
        battle.selectPokemon(player, newPokemon);
      } else {
        break; // break out of loop without setting gameOver to true to call round again
      }
    }

    if (playerMove === 'BAG') {
      const selectedPotion = await playerTurnBag(player.bag);

      if (selectedPotion !== '> BACK <') {
        const potion = player.bag.find((pot) => pot.name === selectedPotion);
        potion.use(battle.playerPokemon);

        const index = player.bag.indexOf(potion);
        player.bag.splice(index, 1);
      } else {
        break; // break out of loop without setting gameOver to true to call round again
      }
    }

    if (playerMove === 'RUN') {
      gameOver = true;
    }
  }

  if (!gameOver) {
    round();
  } // round will be called continuously based on player action until gameOver is set to true
};

main();
