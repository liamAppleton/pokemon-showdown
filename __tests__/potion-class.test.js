const { NormalPokemon, Potion } = require('../classes');

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

  describe('methods', () => {
    let lopunny, potion1;
    beforeEach(() => {
      lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
      potion1 = new Potion('Hyper Potion', 50);
    });

    describe('use()', () => {
      test('instances should have a use method', () => {
        expect(typeof potion1.use).toBe('function');
      });
      test("should increase a pokemon's hitPoints by restores", () => {
        lopunny.takeDamage(60);
        potion1.use(lopunny);
        expect(lopunny.hitPoints).toBe(90);
      });
      test('if restores greater than maxHitPoints, hitPoints should be equal to maxHitPoints', () => {
        lopunny.takeDamage(10);
        potion1.use(lopunny);
        expect(lopunny.hitPoints).toBe(100);
      });
    });
  });
});

/*
properties: name, healAmount
methods: use()
*/
