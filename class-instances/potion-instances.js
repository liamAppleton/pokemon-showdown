const Potion = require('./potion-class');

const smallPotion = new Potion('Small Potion', 20);
const mediumPotion = new Potion('Medium Potion', 50);
const largePotion = new Potion('Large Potion', 100);
const maxPotion = new Potion('Max Potion', 9999);

module.exports = {
  smallPotion,
  mediumPotion,
  largePotion,
  maxPotion,
};
