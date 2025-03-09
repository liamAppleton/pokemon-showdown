const { catchPokemonForTrainer } = require('../utils');
const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Pokeball,
} = require('../classes');

describe('catchPokemonForTrainer()', () => {
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
