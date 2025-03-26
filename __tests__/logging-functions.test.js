const { releaseLog, fightLog, healthBar } = require('../utils');
const { pokemon } = require('../data-files/game-data');
const { Trainer } = require('../classes');
const colours = require('../data-files/colours');

let consoleSpy;
beforeEach(() => (consoleSpy = jest.spyOn(console, 'log')));
afterEach(() => consoleSpy.mockClear());

describe('releaseLog()', () => {
  test('should log using correct pokemon type colour for passed pokemon', () => {
    const computer = new Trainer('Ash', true);
    releaseLog(pokemon.eevee, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\n\t${colours.trainerBorder(
        '=============================='
      )}\n\tAsh sent out ${colours.normalColour(
        'Eevee'
      )}!\n\t${colours.trainerBorder('==============================')}`
    );

    releaseLog(pokemon.charmander, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\n\t${colours.trainerBorder(
        '=============================='
      )}\n\tAsh sent out ${colours.fireColour(
        'Charmander'
      )}!\n\t${colours.trainerBorder('==============================')}`
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
        `\n\t${'Eevee'}\n\t${colours.fullHealth('████████████████████')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}\n`
      );
    });
    test('hitPoints 80%', () => {
      pokemon.eevee.takeDamage(14);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\n\t${'Eevee'}\n\t${colours.highMidHealth('████████████████░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}\n`
      );
    });
    test('hitPoints 60%', () => {
      pokemon.eevee.takeDamage(14);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\n\t${'Eevee'}\n\t${colours.midHealth('████████████░░░░░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}\n`
      );
    });
    test('hitPoints 20%', () => {
      pokemon.eevee.takeDamage(28);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\n\t${'Eevee'}\n\t${colours.lowHealth('████░░░░░░░░░░░░░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}\n`
      );
    });
    test('hitPoints 0%', () => {
      pokemon.eevee.takeDamage(14);
      healthBar(pokemon.eevee);
      expect(consoleSpy).toHaveBeenCalledWith(
        `\n\t${'Eevee'}\n\t${colours.fainted('░░░░░░░░░░░░░░░░░░░░')}  ${
          pokemon.eevee.hitPoints
        } / ${pokemon.eevee.maxHitPoints}\n`
      );
    });
  });
  test('should not mutate input pokemon object', () => {
    const inputCopy = { ...pokemon.eevee };
    healthBar(pokemon.eevee);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});
//! finish testing this function before merging branch

describe('pokeballsLog()', () => {
  //! finish testing
});
