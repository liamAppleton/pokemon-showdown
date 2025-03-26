const {
  catchPokemonForTrainer,
  computerTeamSelection,
  computerReleasePokemon,
} = require('../utils');
const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Pokeball,
} = require('../classes');
const { pokemon } = require('../class-instances');

let lopunny, charizard, squirtle, eevee, ninetails, blastoise;
let pokemonArr;
let pb1, pb2, pb3, pb4, pb5, pb6;
let pokeballArr;
beforeEach(() => {
  lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
  charizard = new FirePokemon('Charizard', 'Ember', 100, 20);
  squirtle = new WaterPokemon('Squirtle', 'Hydro', 100, 20);
  eevee = new NormalPokemon('Eevee', 'Tackle', 100, 20);
  ninetails = new FirePokemon('Ninetails', 'Ember', 100, 20);
  blastoise = new WaterPokemon('Blastoise', 'Hydro Pump', 100, 20);

  pokemonArr = [lopunny, charizard, squirtle, eevee, ninetails, blastoise];

  pb1 = new Pokeball();
  pb2 = new Pokeball();
  pb3 = new Pokeball();
  pb4 = new Pokeball();
  pb5 = new Pokeball();
  pb6 = new Pokeball();

  pokeballArr = [pb1, pb2, pb3, pb4, pb5, pb6];
});

describe('catchPokemonForTrainer()', () => {
  test('should store each pokemon in a pokeball', () => {
    catchPokemonForTrainer(pokemonArr, pokeballArr);
    pokeballArr.forEach((pokeball) => {
      expect(pokeball.storedPokemon).toHaveProperty('name');
    });
  });
  test('should mutate pokeballArr', () => {
    const pokeballArrCopy = structuredClone(pokeballArr);
    catchPokemonForTrainer(pokemonArr, pokeballArr);
    expect(pokeballArr).not.toEqual(pokeballArrCopy);
  });
});

describe('computerTeamSelection()', () => {
  test('should return an array of pokeballs with randomly selected pokemon stored inside each', () => {
    const pokemonCopy = structuredClone(pokemon);
    computerTeamSelection(pokeballArr, pokemonCopy);
    pokeballArr.forEach((pokeball) => {
      expect(pokeball.storedPokemon).toHaveProperty('name');
    });
  });
  test('should mutate pokeballArr', () => {
    const pokemonCopy = structuredClone(pokemon);
    const pokeballArrCopy = structuredClone(pokeballArr);
    computerTeamSelection(pokeballArr, pokemonCopy);
    expect(pokeballArr).not.toEqual(pokeballArrCopy);
  });
  test('should remove 6 pokemon from pokemon object', () => {
    const pokemonCopy = structuredClone(pokemon);
    computerTeamSelection(pokeballArr, pokemonCopy);
    expect(Object.keys(pokemonCopy).length).toBe(29);
  });
});

describe('computerReleasePokemon()', () => {
  beforeEach(() => {
    catchPokemonForTrainer(pokemonArr, pokeballArr);
  });

  test("should return a randomly selected pokemon name from the computer's belt", () => {
    expect(typeof computerReleasePokemon(pokeballArr)).toBe('string');
  });
  test('should return lopunny object when Math.random is 0.15', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.15);
    expect(computerReleasePokemon(pokeballArr)).toEqual('Lopunny');
  });
  test('should return charizard object when Math.random is 0.2', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.2);
    expect(computerReleasePokemon(pokeballArr)).toEqual('Charizard');
  });
  test('should return ninetails object when Math.random is 0.8', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.8);
    expect(computerReleasePokemon(pokeballArr)).toEqual('Ninetails');
  });
  test('should work with an input array of length less than 6', () => {
    pokeballArr.pop();
    expect(typeof computerReleasePokemon(pokeballArr)).toBe('string');
    pokeballArr.pop();
    expect(typeof computerReleasePokemon(pokeballArr)).toBe('string');
  });
  test('should not mutate input array', () => {
    const pokeballArrCopy = [...pokeballArr];
    computerReleasePokemon(pokeballArr);
    expect(pokeballArr).toEqual(pokeballArrCopy);
  });
});
