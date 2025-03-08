const Potion = require('./potion-class');

const smallPotion = new Potion('Small Potion', 20); // Good for low HP Pokémon like Pikachu or Zubat
const mediumPotion = new Potion('Medium Potion', 50); // Good for mid-range Pokémon like Bulbasaur or Machop
const largePotion = new Potion('Large Potion', 100); // Good for high HP Pokémon like Snorlax or Terrakion
const maxPotion = new Potion('Max Potion', 9999); // Fully restores any Pokémon's HP

module.exports = {
  smallPotion,
  mediumPotion,
  largePotion,
  maxPotion,
};
