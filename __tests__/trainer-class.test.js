const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Pokeball,
  Potion,
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
    let potion1, potion2, potion3;
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

      potion1 = new Potion('Hyper Potion', 50);
      potion2 = new Potion('Minor Healing Potion', 20);
      potion3 = new Potion('Healing Potion', 30);

      trainer1.bag = [potion1, potion2, potion3];
    });

    describe('releasePokemon()', () => {
      test('instances should have a releasePokemon method', () => {
        expect(typeof trainer1.releasePokemon).toBe('function');
      });
      test('should return the pokemon object from belt with the name property matching the passed pokemon name', () => {
        expect(trainer1.releasePokemon('Lopunny')).toEqual(lopunny);
      });
    });

    describe('usePotion()', () => {
      test('instances should have a usePotion method', () => {
        expect(typeof trainer1.usePotion).toBe('function');
      });
      test('should restore correct amount of hitPoints to passed pokemon', () => {
        const lopunny = pb1.throw();
        const charizard = pb2.throw();

        lopunny.takeDamage(80);
        trainer1.usePotion('Hyper Potion', lopunny);

        charizard.takeDamage(80);
        trainer1.usePotion('Minor Healing Potion', charizard);

        expect(lopunny.hitPoints).toBe(70);
        expect(charizard.hitPoints).toBe(40);
      });
      test('should remove potion from trainer bag', () => {
        const lopunny = pb1.throw();
        const charizard = pb2.throw();

        lopunny.takeDamage(80);
        trainer1.usePotion('Hyper Potion', lopunny);

        charizard.takeDamage(80);
        trainer1.usePotion('Minor Healing Potion', charizard);

        expect(trainer1.bag.find((pot) => pot.name === 'Hyper Potion')).toBe(
          undefined
        );
        expect(
          trainer1.bag.find((pot) => pot.name === 'Minor Healing Potion')
        ).toBe(undefined);
      });
      test('restores hitPoints correctly when alternating indexes (0, 2) of potions in bag are used', () => {
        const lopunny = pb1.throw();
        const charizard = pb2.throw();

        lopunny.takeDamage(80);
        trainer1.usePotion('Hyper Potion', lopunny);

        charizard.takeDamage(80);
        trainer1.usePotion('Healing Potion', charizard);

        expect(lopunny.hitPoints).toBe(70);
        expect(charizard.hitPoints).toBe(50);
      });

      test('removes used potions when alternating indexes (0, 2) of potions in bag are used', () => {
        const lopunny = pb1.throw();
        const charizard = pb2.throw();

        lopunny.takeDamage(80);
        trainer1.usePotion('Hyper Potion', lopunny);

        charizard.takeDamage(80);
        trainer1.usePotion('Healing Potion', charizard);

        expect(trainer1.bag.find((pot) => pot.name === 'Hyper Potion')).toBe(
          undefined
        );
        expect(trainer1.bag.find((pot) => pot.name === 'Healing Potion')).toBe(
          undefined
        );
      });
    });
  });
});
