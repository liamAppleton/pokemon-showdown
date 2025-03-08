const { pokemon } = require('../class-instances');
const { pokemonLookup } = require('../utils');

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
