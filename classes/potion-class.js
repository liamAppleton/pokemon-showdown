class Potion {
  constructor(name, restores) {
    this.name = name;
    this.restores = restores;
  }

  use(pokemon) {
    const hitPointsAfterRestore = (pokemon.hitPoints += this.restores);
    if (hitPointsAfterRestore > pokemon.maxHitPoints) {
      pokemon.hitPoints = pokemon.maxHitPoints;
    } else {
      pokemon.hitPoints = hitPointsAfterRestore;
    }
  }
}

module.exports = Potion;
