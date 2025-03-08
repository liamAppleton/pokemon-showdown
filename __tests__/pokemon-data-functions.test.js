const { pokemon } = require('../class-instances');
const { pokemonLookup, deletePokemon } = require('../utils');

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
  test('should remove input pokemon from input object', () => {
    deletePokemon('Eevee');
    expect(pokemonLookup(pokemon, 'eevee')).toBe(undefined);
  });
});
