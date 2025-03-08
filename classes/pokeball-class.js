class Pokeball {
  constructor() {
    this.storedPokemon = {};
  }

  catch(pokemon) {
    this.storedPokemon = pokemon;
  }

  throw() {
    return this.storedPokemon;
  }
}

module.exports = Pokeball;
