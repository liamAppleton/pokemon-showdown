const chalk = require('chalk');

const normalColour = chalk.hex('#A8A77A');
const fireColour = chalk.hex('#EE8130');
const waterColour = chalk.hex('#6390F0');
const electricColour = chalk.hex('#F7D02C');
const grassColour = chalk.hex('#7AC74C');
const fightingColour = chalk.hex('#C22E28');
const flyingColour = chalk.hex('#A98FF3');

const fullHealth = chalk.hex('#22C55E');
const midHealth = chalk.hex('#EAB308');
const lowHealth = chalk.hex('#EF4444');
const fainted = chalk.hex('#6B7280');

const battleBorder = chalk.hex('#7F1D1D');
const trainerBorder = chalk.bold.hex('#4169E1');
const generalText = chalk.hex('#FFCC00');

module.exports = {
  normalColour,
  fireColour,
  waterColour,
  electricColour,
  grassColour,
  fightingColour,
  flyingColour,
  fullHealth,
  midHealth,
  lowHealth,
  fainted,
  battleBorder,
  trainerBorder,
  generalText,
};
