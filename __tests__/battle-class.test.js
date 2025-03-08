const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Pokeball,
  Trainer,
  Battle,
} = require('../classes');

describe('Battle Class', () => {
  let player, computer;
  let lopunny, charizard, squirtle;
  let eevee, ninetails, blastoise;
  let pb1, pb2, pb3, pb4, pb5, pb6;
  let potion1, potion2, potion3;
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
  });

  describe('properties', () => {
    test('should have a player property', () => {
      console.log(player.belt);
      console.log(computer.belt);
    });
  });
});

/* 
properties: player, computer, playerPokemon, computerPokemon
methods: fight

*/
