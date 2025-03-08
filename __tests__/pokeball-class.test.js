const { Pokemon, NormalPokemon, Pokeball } = require('../classes');

describe('Pokeball Class', () => {
  let lopunny;
  let pokeball1;
  beforeEach(() => {
    lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
    pokeball1 = new Pokeball();
  });

  describe('properties', () => {
    describe('storedPokemon', () => {
      test('should be initialised to an empty object', () => {
        expect(pokeball1.storedPokemon).toEqual({});
      });
    });
  });

  describe('methods', () => {
    describe('catch()', () => {
      test('should add the passed pokemon instance to storedPokemon', () => {
        pokeball1.catch(lopunny);
        expect(pokeball1.storedPokemon).toEqual(lopunny);
      });
      test('should add the passed pokemon instance to storedPokemon', () => {
        pokeball1.catch(lopunny);
        expect(pokeball1.storedPokemon).toEqual(lopunny);
        expect(pokeball1.storedPokemon instanceof Pokemon).toBe(true);
      });
    });
    describe('throw()', () => {
      test('should return the stored pokemon object', () => {
        pokeball1.catch(lopunny);
        expect(pokeball1.throw()).toEqual(lopunny);
      });
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
