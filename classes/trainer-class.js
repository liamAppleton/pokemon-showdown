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
}

module.exports = Trainer;
