const { Trainer } = require('../classes');

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
});

/*
properties: name, belt, bag, isComputer

methods: releasePokemon, usePotion


*/
