const inquirer = require('inquirer');

const initialSelection = async () => {
  const selectionQuestion = {
    type: 'list',
    name: 'pokemon',
    message: 'Select a pokemon',
    choices: [1, 2, 3],
    loop: true,
  };
  return inquirer
    .prompt(selectionQuestion)
    .then((pokemon) => console.log(pokemon));
};

const main = async () => {
  let i = 0;
  while (i < 6) {
    await initialSelection();
    i++;
  }
};

main();
