const { pokemon } = require('../class-instances');
const colours = require('../data-files/colours');
const trainerNames = require('../data-files/trainer-names');
const {
  pokemonLookup,
  typeColourSelector,
  deletePokemon,
  formatNames,
  selectComputerName,
} = require('../utils');

describe('pokemonLookup()', () => {
  test('should return a pokemon instance with same name as input', () => {
    expect(pokemonLookup(pokemon, 'Eevee')).toEqual(pokemon.eevee);
  });
  test('should not mutate input object', () => {
    const inputCopy = { ...pokemon };
    pokemonLookup(pokemon, 'Eevee');
    expect(pokemon).toEqual(inputCopy);
  });
});

describe('typeColourSelector()', () => {
  test('should return a function', () => {
    expect(typeof typeColourSelector(pokemon.eevee)).toBe('function');
  });
  test("should return the correct colour function for the passing pokemon's type", () => {
    expect(typeColourSelector(pokemon.eevee)).toBe(colours.normalColour);
    expect(typeColourSelector(pokemon.charmander)).toBe(colours.fireColour);
    expect(typeColourSelector(pokemon.squirtle)).toBe(colours.waterColour);
  });
  test('should not mutate the input object', () => {
    const inputCopy = { ...pokemon.eevee };
    typeColourSelector(pokemon.eevee);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});

describe('deletePokemon()', () => {
  test('should remove input pokemon from input pokemon object', () => {
    deletePokemon(pokemon, 'Spearow');
    expect(pokemonLookup(pokemon, 'spearow')).toBe(undefined);
  });
});

describe('formatNames()', () => {
  test('should return a formatted array with first letter capitalised and type emoji added', () => {
    const input = [
      'eevee',
      'poliwag',
      'charmander',
      'bellsprout',
      'pikachu',
      'hitmonchan',
      'zubat',
    ];
    expect(formatNames(pokemon, input)).toEqual([
      '🐻 Eevee',
      '🌊 Poliwag',
      '🔥 Charmander',
      '🍃 Bellsprout',
      '⚡️ Pikachu',
      '🥊 Hitmonchan',
      '🪽 Zubat',
    ]);
  });
  test('should not mutate input array', () => {
    const input = ['eevee', 'poliwag', 'charmander'];
    const inputCopy = ['eevee', 'poliwag', 'charmander'];
    formatNames(pokemon, input);
    expect(input).toEqual(inputCopy);
  });
  test('should return an array with a new reference to the input array', () => {
    const input = ['eevee', 'poliwag', 'charmander'];
    expect(formatNames(pokemon, input)).not.toBe(input);
  });
});

describe('selectComputerName()', () => {
  let randomSpy;
  beforeEach(() => {
    randomSpy = jest.spyOn(Math, 'random');
  });
  describe('should return a randomly selected trainer name', () => {
    test('random value 0.1', () => {
      randomSpy.mockReturnValue(0.1);
      const expected = trainerNames[Math.floor(0.1 * trainerNames.length)];
      expect(selectComputerName(trainerNames)).toBe(expected);
    });
    test('random value 0.3', () => {
      randomSpy.mockReturnValue(0.3);
      const expected = trainerNames[Math.floor(0.3 * trainerNames.length)];
      expect(selectComputerName(trainerNames)).toBe(expected);
    });
    test('random value 0.8', () => {
      randomSpy.mockReturnValue(0.8);
      const expected = trainerNames[Math.floor(0.8 * trainerNames.length)];
      expect(selectComputerName(trainerNames)).toBe(expected);
    });
  });
  test('should not mutate input trainNames array', () => {
    const inputCopy = [...trainerNames];
    selectComputerName(trainerNames);
    expect(trainerNames).toEqual(inputCopy);
  });
});
