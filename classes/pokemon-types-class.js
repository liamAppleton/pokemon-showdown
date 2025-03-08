const Pokemon = require('./pokemon-class');

class NormalPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Normal';
  }

  calculateDamageMultiplier(pokemon) {
    return 1;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Fire';
  }

  calculateDamageMultiplier(pokemon) {
    switch (pokemon.type) {
      case 'Grass':
        return 2;
      case 'Fire':
        return 0.5;
      case 'Water':
        return 0.5;
    }
    return 1;
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Water';
  }

  effectiveAgainst(pokemon) {
    return null;
  }

  weakTo(pokemon) {
    return null;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Grass';
  }

  effectiveAgainst(pokemon) {
    return null;
  }

  weakTo(pokemon) {
    return null;
  }
}

class ElectricPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Electric';
  }

  effectiveAgainst(pokemon) {
    return null;
  }

  weakTo(pokemon) {
    return null;
  }
}

class FlyingPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Flying';
  }

  effectiveAgainst(pokemon) {
    return null;
  }

  weakTo(pokemon) {
    return null;
  }
}

class FightingPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Fighting';
  }

  effectiveAgainst(pokemon) {
    return null;
  }

  weakTo(pokemon) {
    return null;
  }
}
module.exports = {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
};
