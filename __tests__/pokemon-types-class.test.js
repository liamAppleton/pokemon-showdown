const {
  Pokemon,
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
} = require('../classes');

let lopunny, charizard, squirtle, leafeon, jolteon, fearow, machamp;

beforeEach(() => {
  lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
  charizard = new FirePokemon('Charizard', 'Ember', 100, 20);
  squirtle = new WaterPokemon('Squirtle', 'Hydro', 100, 20);
  leafeon = new GrassPokemon('Leafeon', 'Tangle', 100, 20);
  jolteon = new ElectricPokemon('Jolteon', 'Shock', 100, 20);
  fearow = new FlyingPokemon('Fearow', 'Gust', 100, 20);
  machamp = new FightingPokemon('Machamp', 'Box', 100, 20);
});

describe('NormalPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(lopunny instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(lopunny.type).toBe('Normal');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('should return 1 when passed any pokemon', () => {
        expect(lopunny.calculateDamageMultiplier(leafeon)).toBe(1);
      });
    });
  });
});

describe('FirePokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(charizard instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(charizard.type).toBe('Fire');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('should return 2 when passed a grass pokemon', () => {
        expect(charizard.calculateDamageMultiplier(leafeon)).toBe(2);
      });
      test('should return 0.5 when passed fire or water pokemon', () => {
        expect(charizard.calculateDamageMultiplier(squirtle)).toBe(0.5);
        expect(charizard.calculateDamageMultiplier(charizard)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(charizard.calculateDamageMultiplier(jolteon)).toBe(1);
      });
    });
  });
});
