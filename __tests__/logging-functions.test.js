const {
  releaseLog,
  pokeballsLog,
  fightLog,
  healthBar,
  catchPokemonForTrainer,
} = require('../utils');
const { pokemon } = require('../data-files/game-data');
const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  Trainer,
  Pokeball,
} = require('../classes');
const colours = require('../data-files/colours');

let consoleSpy;
beforeEach(() => (consoleSpy = jest.spyOn(console, 'log')));
afterEach(() => consoleSpy.mockClear());

describe('releaseLog()', () => {
  test('should log using correct pokemon type colour for passed pokemon', () => {
    const computer = new Trainer('Ash', true);
    releaseLog(pokemon.eevee, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\n\t${colours.releaseBorder(
        '=============================='
      )}\n\tAsh sent out ${colours.normalColour(
        'Eevee'
      )}!\n\t${colours.releaseBorder('==============================')}`
    );

    releaseLog(pokemon.charmander, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\n\t${colours.releaseBorder(
        '=============================='
      )}\n\tAsh sent out ${colours.fireColour(
        'Charmander'
      )}!\n\t${colours.releaseBorder('==============================')}`
    );
  });
  test('should not mutate input pokemon object', () => {
    const computer = new Trainer('Ash', true);
    const inputCopy = { ...pokemon.eevee };
    releaseLog(pokemon.eevee, computer.name);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});

describe('fightLog()', () => {
  test('should log correct message including the used move', () => {
    fightLog(pokemon.eevee);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\n\t${colours.battleBorder(
        '=============================='
      )}\n\t${colours.normalColour('Eevee')} used ${colours.normalColour(
        'Tackle'
      )}!\n\t${colours.battleBorder('==============================')}\n`
    );
  });
  test('should not mutate input pokemon object', () => {
    const inputCopy = { ...pokemon.eevee };
    fightLog(pokemon.eevee);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});

describe('healthBar()', () => {
  describe("should log appropriate length healthbar and colour based on the passed pokemon's hitPoints", () => {
    test('hitPoints 100%', () => {
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\t${'Eevee'}\n\t${colours.fullHealth('████████████████████')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}`
      );
    });
    test('hitPoints 80%', () => {
      pokemon.eevee.takeDamage(14);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\t${'Eevee'}\n\t${colours.highMidHealth('████████████████░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}`
      );
    });
    test('hitPoints 60%', () => {
      pokemon.eevee.takeDamage(14);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\t${'Eevee'}\n\t${colours.midHealth('████████████░░░░░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}`
      );
    });
    test('hitPoints 20%', () => {
      pokemon.eevee.takeDamage(28);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\t${'Eevee'}\n\t${colours.lowHealth('████░░░░░░░░░░░░░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}`
      );
    });
    test('hitPoints 0%', () => {
      pokemon.eevee.takeDamage(14);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\t${'Eevee'}\n\t${colours.fainted('░░░░░░░░░░░░░░░░░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}`
      );
    });
  });
  test('should not mutate input pokemon object', () => {
    const inputCopy = { ...pokemon.eevee };
    healthBar(pokemon.eevee);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});

describe('pokeballsLog()', () => {
  let lopunny, charizard, squirtle, eevee, ninetails, blastoise;
  let pokeballArr, pokemonArr;
  let pb1, pb2, pb3, pb4, pb5, pb6;
  let trainer;
  let mock;

  beforeEach(() => {
    mock = jest.fn((trainer) => {
      const { pokeballRed } = colours;
      const pokeballArr = Array(trainer.belt.length).fill(pokeballRed('◯'));
      const missingPokeballsArray = Array(6 - trainer.belt.length).fill('◯');
      const pokeballs = pokeballArr.concat(missingPokeballsArray);
      return `\n\t${trainer.name}\n\t${pokeballs.join(' ')}`;
    }); // solves issue with ansi characters not allowing tests to pass

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

    trainer = new Trainer('Ash');
    trainer.belt = catchPokemonForTrainer(pokemonArr, pokeballArr);
  });

  describe("should log the number of pokeballs remaining in the trainer's belt", () => {
    test('6 pokeballs', () => {
      const expected = mock(trainer);
      pokeballsLog(trainer);
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });
    test('4 pokeballs', () => {
      trainer.belt.splice(0, 2);

      const expected = mock(trainer);
      pokeballsLog(trainer);
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });
    test('2 pokeballs', () => {
      trainer.belt.splice(0, 4);
      const expected = mock(trainer);
      pokeballsLog(trainer);
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });
    test('0 pokeballs', () => {
      trainer.belt = [];
      const expected = mock(trainer);
      pokeballsLog(trainer);
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });
  });
  test('should not mutate input trainer object', () => {
    const inputCopy = { ...trainer };
    pokeballsLog(trainer);
    expect(trainer).toEqual(inputCopy);
  });
});
