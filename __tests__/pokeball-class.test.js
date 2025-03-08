const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
  Pokeball,
} = require('../classes');

describe('Pokeball Class', () => {
  let lopunny;
  beforeEach(() => {
    lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
  });

  describe('properties', () => {
    test('storedPokemon: should be initialised to an empty object', () => {
      const pokeball1 = new Pokeball();
      expect(pokeball1.storedPokemon).toEqual({});
    });
  });
});

/*
store an instance of pokemon class
properties: storedPokemon

methods:
    - catch
    - throw
    - viewPokemon
*/
