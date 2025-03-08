class Pokemon {
  constructor(name, move, maxHitPoints, attackDamage) {
    this.name = name;
    this.move = move;
    this.maxHitPoints = maxHitPoints;
    this.hitPoints = maxHitPoints;
    this.attackDamage = attackDamage;
  }

  useMove() {
    console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }

  takeDamage(damage) {
    this.hitPoints -= damage;
  }
}

module.exports = Pokemon;
