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

  calculateDamageMultiplier(pokemon) {
    switch (pokemon.type) {
      case 'Fire':
        return 2;
      case 'Water':
        return 0.5;
      case 'Grass':
        return 0.5;
    }
    return 1;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Grass';
  }

  calculateDamageMultiplier(pokemon) {
    switch (pokemon.type) {
      case 'Water':
        return 2;
      case 'Fire':
        return 0.5;
      case 'Grass':
        return 0.5;
    }
    return 1;
  }
}

class ElectricPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Electric';
  }

  calculateDamageMultiplier(pokemon) {
    switch (pokemon.type) {
      case 'Water':
        return 2;
      case 'Flying':
        return 2;
      case 'Electric':
        return 0.5;
      case 'Grass':
        return 0.5;
    }
    return 1;
  }
}

class FlyingPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Flying';
  }

  calculateDamageMultiplier(pokemon) {
    switch (pokemon.type) {
      case 'Grass':
        return 2;
      case 'Fighting':
        return 2;
      case 'Electric':
        return 0.5;
    }
    return 1;
  }
}

class FightingPokemon extends Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    super(name, move, maxHitPoints, attackDamage);
    this.type = 'Fighting';
  }

  calculateDamageMultiplier(pokemon) {
    switch (pokemon.type) {
      case 'Normal':
        return 2;
      case 'Flying':
        return 0.5;
    }
    return 1;
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
