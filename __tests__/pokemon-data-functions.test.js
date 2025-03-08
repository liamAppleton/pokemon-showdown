const { createPokemonNameList } = require('../utils');
const { pokemon } = require('../class-instances');

describe('createPokemonNameList', () => {
  test('should return an array', () => {
    expect(Array.isArray(createPokemonNameList(pokemon))).toBe(true);
  });
  test('should return an array of pokemon names from an object of pokemon instances', () => {
    const output = createPokemonNameList(pokemon);
    output.forEach((name) => expect(typeof name).toBe('string'));
  });
  test('should not mutate input object', () => {
    const inputCopy = { ...pokemon };
    createPokemonNameList(pokemon);
    expect(pokemon).toEqual(inputCopy);
  });
});
