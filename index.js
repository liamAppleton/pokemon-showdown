const {
  getPlayerName,
  initialSelection,
  playerSelections,
} = require('./inquirer-prompts');

let playerName;

const main = async () => {
  playerName = await getPlayerName();

  let i = 0;
  while (i < 6) {
    await initialSelection();
    i++;
  }
  console.log(playerName);
  console.log(playerSelections);
};

main();
