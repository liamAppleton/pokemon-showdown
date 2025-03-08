class Battle {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.playerPokemon = { trainer: 'player' };
    this.computerPokemon = { trainer: 'computer' };
  }

  selectPokemon(trainer, pokemon) {
    const selectedPokemon = trainer.releasePokemon(pokemon);
    if (!trainer.isComputer) {
      this.playerPokemon.selectedPokemon = selectedPokemon;
    } else {
      this.computerPokemon.selectedPokemon = selectedPokemon;
    }
  }

  fight(attacker, defender) {
    const { selectedPokemon: att } = attacker;
    const { selectedPokemon: def } = defender;
    const damage = Math.round(
      att.attackDamage * att.calculateDamageMultiplier(def)
    );

    def.takeDamage(damage);
    // ! this logic is a joke and needs refactoring &/or extracting into a function
    if (defender.trainer === 'computer' && def.hasFainted()) {
      const pokemon = this.computer.belt.find(({ storedPokemon }) => {
        return storedPokemon.name === def.name;
      });
      const index = this.computer.belt.indexOf(pokemon);
      this.computer.belt.splice(index, 1);
    }
    if (defender.trainer === 'player' && def.hasFainted()) {
      const pokemon = this.player.belt.find(({ storedPokemon }) => {
        return storedPokemon.name === def.name;
      });
      const index = this.player.belt.indexOf(pokemon);
      this.player.belt.splice(index, 1);
    }
  }
}

module.exports = Battle;
