const { initialSelection } = require('./inquirer-prompts');

const main = async () => {
  let i = 0;
  while (i < 6) {
    await initialSelection();
    i++;
  }
};

main();
