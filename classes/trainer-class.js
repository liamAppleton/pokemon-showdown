class Trainer {
  constructor(name, isComputer) {
    this.name = name;
    this.isComputer = isComputer;
    this.belt = [];
    this.bag = [];
  }

  releasePokemon(pokemon) {
    return this.belt.find((pokeball) => {
      return pokeball.storedPokemon.name === pokemon;
    }).storedPokemon;
  }

  usePotion(selectedPotion, pokemon) {
    const potion = this.bag.find((pot) => pot.name === selectedPotion);
    const index = this.bag.indexOf(potion);
    potion.use(pokemon);
    this.bag.splice(index, 1);
  }
}

module.exports = Trainer;
