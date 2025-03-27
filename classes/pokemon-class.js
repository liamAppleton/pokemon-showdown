class Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    this.name = name;
    this.move = move;
    this.maxHitPoints = maxHitPoints;
    this.hitPoints = maxHitPoints;
    this.attackDamage = attackDamage;
  }

  useMove() {
    return this.attackDamage;
  }

  takeDamage(damage) {
    this.hitPoints -= damage;
  }

  hasFainted() {
    return this.hitPoints <= 0;
  }
}

module.exports = Pokemon;
