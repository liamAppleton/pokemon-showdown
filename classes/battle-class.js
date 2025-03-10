class Battle {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.playerPokemon = {};
    this.computerPokemon = {};
  }

  selectPokemon(trainer, pokemon) {
    const selectedPokemon = trainer.releasePokemon(pokemon);
    if (!trainer.isComputer) {
      this.playerPokemon = selectedPokemon;
    } else {
      this.computerPokemon = selectedPokemon;
    }
  }

  fight(attacker, defender, defendingTrainer) {
    const damage = Math.round(
      attacker.attackDamage * attacker.calculateDamageMultiplier(defender)
    );

    defender.takeDamage(damage);

    if (defender.hasFainted()) {
      defendingTrainer.belt = defendingTrainer.belt.filter(
        ({ storedPokemon }) => !storedPokemon.hasFainted()
      );
    }
  }
}

module.exports = Battle;
