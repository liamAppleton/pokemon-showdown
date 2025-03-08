class Potion {
  constructor(name, restores) {
    this.name = name;
    this.restores = restores;
  }

  use(pokemon) {
    pokemon.hitPoints += this.restores;
    if (pokemon.hitPoints > pokemon.maxHitPoints) {
      pokemon.hitPoints = pokemon.maxHitPoints;
    }
  }
}

module.exports = Potion;
