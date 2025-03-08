const { Pokemon } = require('../classes');

describe.skip('Pokemon Class', () => {
  describe('properties', () => {
    test('should have a name property', () => {
      const pokemon1 = new Pokemon('Mew');
      expect(pokemon1.name).toBe('Mew');
    });
    test('should have a move property', () => {
      const pokemon1 = new Pokemon('Mew', 'Tackle');
      expect(pokemon1.move).toBe('Tackle');
    });
    test('should have a maxHitPoints property', () => {
      const pokemon1 = new Pokemon('Mew', 'Tackle', 100);
      expect(pokemon1.maxHitPoints).toBe(100);
    });
    test('should have a hitPoints property initialised to maxHitPoints', () => {
      const pokemon1 = new Pokemon('Mew', 'Tackle', 100);
      expect(pokemon1.hitPoints).toBe(100);
    });
    test('should have an attackDamage property', () => {
      const pokemon1 = new Pokemon('Mew', 'Tackle', 100, 20);
      expect(pokemon1.attackDamage).toBe(20);
    });
  });

  describe('methods', () => {
    let pokemon1;
    beforeEach(() => {
      pokemon1 = new Pokemon('Mew', 'Tackle', 100, 20);
    });
    describe('useMove()', () => {
      test('should return attackDamage', () => {
        expect(pokemon1.useMove()).toBe(20);
      });
      test("should log pokemon's name and move", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        pokemon1.useMove();
        expect(consoleSpy).toHaveBeenCalledWith('Mew used Tackle!');
      });
    });
    describe('takeDamage()', () => {
      test('should reduce hitPoints by passed damage value', () => {
        pokemon1.takeDamage(10);
        expect(pokemon1.hitPoints).toBe(90);
      });
      test('should not change maxHitPoints', () => {
        pokemon1.takeDamage(10);
        expect(pokemon1.maxHitPoints).toBe(100);
      });
    });
  });
});
