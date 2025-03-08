const { Potion } = require('../classes');

describe('Potion Class', () => {
  describe('properties', () => {
    test('should have a name property', () => {
      const potion1 = new Potion('Hyper Potion');
      expect(potion1.name).toBe('Hyper Potion');
    });
    test('should have a restores property', () => {
      const potion1 = new Potion('Hyper Potion', 50);
      expect(potion1.restores).toBe(50);
    });
  });
});

/*
properties: name, healAmount
methods: use()
*/
