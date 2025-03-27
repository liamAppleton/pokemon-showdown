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
  releaseLog,
  pokeballsLog,
  fightLog,
  healthBar,
  trainerCardLog,
} = require('./utils');
const {
  playerPotions,
  playerPokeballs,
  computerPokeballs,
  pokemon,
} = require('./data-files/game-data');
const { pokeballRed } = require('./data-files/colours');

let playerName;
let player, computer;
let battle;
let gameOver = false;
let turnOver = false;

const main = async () => {
  playerName = await getPlayerName();

  let i = 0;
  while (i < 6) {
    await initialSelection();
    console.log(
      Array(playerSelections.length).fill(pokeballRed('◯')).join(' ')
    );
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
  battle.selectPokemon(computer, computerSentOut);

  releaseLog(battle.computerPokemon, computer.name);
  trainerCardLog(computer, battle.computerPokemon);

  const playerSentOut = await playerReleasePokemon(player.belt);
  battle.selectPokemon(player, playerSentOut);

  releaseLog(battle.playerPokemon, player.name);
  trainerCardLog(player, battle.playerPokemon);

  round();
};

const playerFight = async () => {
  let { playerPokemon, computerPokemon } = battle;

  battle.fight(playerPokemon, computerPokemon, computer);
  fightLog(playerPokemon);
  trainerCardLog(computer, computerPokemon);

  if (computer.belt.length === 0) {
    gameOver = true;
    return;
  }
  turnOver = true;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // promise based delay function to act as a blocking version of setTimeout

const computerFight = async () => {
  await delay(1000);
  if (computer.belt.length === 0) {
    turnOver = true;
    return;
  }

  let { playerPokemon, computerPokemon } = battle;

  if (computerPokemon.hasFainted()) {
    battle.selectPokemon(computer, computerReleasePokemon(computer.belt));
    computerPokemon = battle.computerPokemon;

    releaseLog(battle.computerPokemon, computer.name);
    trainerCardLog(computer, computerPokemon);
    return;
  } // flips turn back to player so computer can't attack immediately after sending out a pokemon

  battle.fight(computerPokemon, playerPokemon, player);
  fightLog(computerPokemon);
  trainerCardLog(player, playerPokemon);

  if (player.belt.length === 0) {
    gameOver = true;
  } else if (playerPokemon.hasFainted()) {
    const playerSentOut = await playerReleasePokemon(player.belt);
    battle.selectPokemon(player, playerSentOut);

    releaseLog(battle.playerPokemon, player.name);
    trainerCardLog(player, battle.playerPokemon);
  }
  turnOver = true;
};

const round = async () => {
  while (!gameOver) {
    const playerMove = await playerTurn();

    if (playerMove === 'FIGHT') {
      turnOver = false; // ensures loop will be entered if player selects a new pokemon or uses a potion
      while (!turnOver) {
        await playerFight();
        await computerFight();
      }
      turnOver = false;
    }

    if (playerMove === 'POKéMON') {
      const newPokemon = await playerTurnPokemon(
        battle.playerPokemon.name,
        player.belt
      );

      if (newPokemon !== '> BACK <') {
        battle.selectPokemon(player, newPokemon);
        releaseLog(battle.playerPokemon, player.name);
        trainerCardLog(player, battle.playerPokemon);
        await computerFight();
      } else {
        break; // break out of loop without setting gameOver to true to call round again
      }
    }

    if (playerMove === 'BAG') {
      const selectedPotion = await playerTurnBag(player.bag);

      if (selectedPotion !== '> BACK <') {
        const potion = player.bag.find((pot) => pot.name === selectedPotion);
        potion.use(battle.playerPokemon);
        trainerCardLog(player, battle.playerPokemon);
        const index = player.bag.indexOf(potion);
        player.bag.splice(index, 1);
        await computerFight();
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

  //! endgame message
};

main();
