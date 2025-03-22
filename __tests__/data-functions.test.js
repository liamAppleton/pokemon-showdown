const { pokemon } = require('../class-instances');
const { pokemonLookup, deletePokemon, formatNames } = require('../utils');

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
    expect(formatNames(input)).toEqual([
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
    formatNames(input);
    expect(input).toEqual(inputCopy);
  });
  test('should return an array with a new reference to the input array', () => {
    const input = ['eevee', 'poliwag', 'charmander'];
    expect(formatNames(input)).not.toBe(input);
  });
});
