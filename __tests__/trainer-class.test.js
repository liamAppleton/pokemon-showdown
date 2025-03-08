const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Pokeball,
  Trainer,
} = require('../classes');

describe('Trainer Class', () => {
  describe('properties', () => {
    test('should have a name property', () => {
      const trainer1 = new Trainer('Ash');
      expect(trainer1.name).toBe('Ash');
    });
    test('should have a belt property initialised to an empty array', () => {
      const trainer1 = new Trainer('Ash');
      expect(trainer1.belt).toEqual([]);
    });
    test('should have a bag property initialised to an empty array', () => {
      const trainer1 = new Trainer('Ash');
      expect(trainer1.bag).toEqual([]);
    });
    test('should have an isComputer property property', () => {
      const trainer1 = new Trainer('Ash', false);
      expect(trainer1.isComputer).toBe(false);
    });
  });

  describe('methods', () => {
    let trainer1, lopunny, charizard, squirtle;
    let pb1, pb2, pb3;
    beforeEach(() => {
      trainer1 = new Trainer('Ash');

      lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
      charizard = new FirePokemon('Charizard', 'Ember', 100, 20);
      squirtle = new WaterPokemon('Squirtle', 'Hydro', 100, 20);

      pb1 = new Pokeball();
      pb2 = new Pokeball();
      pb3 = new Pokeball();

      pb1.catch(lopunny);
      pb2.catch(charizard);
      pb3.catch(squirtle);

      trainer1.belt = [pb1, pb2, pb3];
    });

    describe('releasePokemon()', () => {
      test('instances should have a releasePokemon method', () => {
        expect(typeof trainer1.releasePokemon).toBe('function');
      });
      test('should return the pokemon object from belt with the name property matching the passed pokemon name', () => {
        expect(trainer1.releasePokemon('Lopunny')).toEqual(lopunny);
      });
    });
  });
});

/*
methods: releasePokemon, usePotion


*/
