const { releaseLog, fightLog } = require('../utils');
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
        '================================'
      )}\n\tAsh sent out ${colours.normalColour(
        'Eevee'
      )}!\n\t${colours.trainerBorder('================================')}\n`
    );

    releaseLog(pokemon.charmander, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\n\t${colours.trainerBorder(
        '================================'
      )}\n\tAsh sent out ${colours.fireColour(
        'Charmander'
      )}!\n\t${colours.trainerBorder('================================')}\n`
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
        '================================'
      )}\n\t${colours.normalColour('Eevee')} used ${colours.normalColour(
        'Tackle'
      )}!\n\t${colours.battleBorder('================================')}\n`
    );
  });
  test('should not mutate input pokemon object', () => {
    const inputCopy = { ...pokemon.eevee };
    fightLog(pokemon.eevee);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});
