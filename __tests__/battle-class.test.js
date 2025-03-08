const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Pokeball,
  Trainer,
  Battle,
} = require('../classes');

describe('Battle Class', () => {
  let battle;
  let player, computer;
  let lopunny, charizard, squirtle;
  let eevee, ninetails, blastoise;
  let pb1, pb2, pb3, pb4, pb5, pb6;
  beforeEach(() => {
    player = new Trainer('Ash', false);
    computer = new Trainer('Computer', true);

    lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
    charizard = new FirePokemon('Charizard', 'Ember', 100, 20);
    squirtle = new WaterPokemon('Squirtle', 'Hydro', 100, 20);
    eevee = new NormalPokemon('Eevee', 'Tackle', 100, 20);
    ninetails = new FirePokemon('Ninetails', 'Ember', 100, 20);
    blastoise = new WaterPokemon('Blastoise', 'Hydro Pump', 100, 20);

    pb1 = new Pokeball();
    pb2 = new Pokeball();
    pb3 = new Pokeball();
    pb4 = new Pokeball();
    pb5 = new Pokeball();
    pb6 = new Pokeball();

    pb1.catch(lopunny);
    pb2.catch(charizard);
    pb3.catch(squirtle);
    pb4.catch(eevee);
    pb5.catch(ninetails);
    pb6.catch(blastoise);

    player.belt = [pb1, pb2, pb3];
    computer.belt = [pb4, pb5, pb6];

    battle = new Battle(player, computer);
  });

  describe('properties', () => {
    test('should have a player property', () => {
      expect(battle.player).toEqual(player);
    });
    test('should have a computer property', () => {
      expect(battle.computer).toEqual(computer);
    });
    test('should have a playerPokemon property initialised to an object with a trainer key set to player', () => {
      expect(battle.playerPokemon).toEqual({ trainer: 'player' });
    });
    test('should have a computerPokemon property initialised to an object with a trainer key set to computer', () => {
      expect(battle.computerPokemon).toEqual({ trainer: 'computer' });
    });
  });

  describe('methods', () => {
    describe('selectPokemon()', () => {
      test('instances should have a selectPokemon property', () => {
        expect(typeof battle.selectPokemon).toBe('function');
      });
      test('should add passed pokemon to playerPokemon on a key of selectedPokemon if player passed to method', () => {
        battle.selectPokemon(player, 'Lopunny');
        expect(battle.playerPokemon).toEqual({
          trainer: 'player',
          selectedPokemon: lopunny,
        });
      });
      test('should add passed pokemon to computerPokemon on a key of selectedPokemon if computer passed to method', () => {
        battle.selectPokemon(computer, 'Eevee');
        expect(battle.computerPokemon).toEqual({
          trainer: 'computer',
          selectedPokemon: eevee,
        });
      });
    });
    describe('fight()', () => {
      test('instances should have a fight property', () => {
        expect(typeof battle.fight).toBe('function');
      });
      test('when passed two normal pokemon should reduce hitPoints of defending pokemon accordingly', () => {
        battle.selectPokemon(player, 'Lopunny');
        battle.selectPokemon(computer, 'Eevee');

        const attacker = battle.playerPokemon;
        const defender = battle.computerPokemon;

        battle.fight(attacker, defender);

        expect(defender.selectedPokemon.hitPoints).toBe(80);
      });
      test('when passed an attacker strong against defender should reduce hitPoints of defending pokemon accordingly', () => {
        battle.selectPokemon(player, 'Squirtle');
        battle.selectPokemon(computer, 'Ninetails');

        const attacker = battle.playerPokemon;
        const defender = battle.computerPokemon;

        battle.fight(attacker, defender);

        expect(defender.selectedPokemon.hitPoints).toBe(60);
      });
      test('when passed an attacker weak against defender should reduce hitPoints of defending pokemon accordingly', () => {
        battle.selectPokemon(player, 'Charizard');
        battle.selectPokemon(computer, 'Blastoise');

        const attacker = battle.playerPokemon;
        const defender = battle.computerPokemon;

        battle.fight(attacker, defender);

        expect(defender.selectedPokemon.hitPoints).toBe(90);
      });
      test('should remove fainted pokemon from corresponding trainers belt', () => {
        battle.selectPokemon(player, 'Charizard');
        battle.selectPokemon(computer, 'Blastoise');

        const attacker = battle.playerPokemon;
        const defender = battle.computerPokemon;
        defender.selectedPokemon.takeDamage(90);

        battle.fight(attacker, defender);

        expect(
          computer.belt.find(
            (pokeball) =>
              pokeball.storedPokemon.name === defender.selectedPokemon.name
          )
        ).toBe(undefined);
      });
    });
  });
});

/* 

methods: fight 
reduces hitPoints accordingly
removed pokemon from selection if fainted

hasFainted should remove pokemon from belt
*/
