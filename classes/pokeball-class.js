class Pokeball {
  constructor() {
    this.storedPokemon = {};
  }

  catch(pokemon) {
    this.storedPokemon = pokemon;
  }
}

module.exports = Pokeball;
