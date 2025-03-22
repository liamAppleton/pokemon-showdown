const { computerReleaseLog } = require('../utils');
const { pokemon } = require('../data-files/game-data');
const { Trainer } = require('../classes');
const colours = require('../data-files/colours');

describe('computerReleaseLog()', () => {
  test('should log using correct pokemon type colour for passed pokemon', () => {
    const computer = new Trainer('Ash', true);
    const consoleSpy = jest.spyOn(console, 'log');
    computerReleaseLog(pokemon.eevee, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `Ash sent out ${colours.normalColour('Eevee')}!`
    );

    computerReleaseLog(pokemon.charmander, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `Ash sent out ${colours.fireColour('Charmander')}!`
    );

    computerReleaseLog(pokemon.squirtle, computer.name);
    expect(consoleSpy).toHaveBeenCalledWith(
      `Ash sent out ${colours.waterColour('Squirtle')}!`
    );
  });
  test('should not mutate input pokemon object', () => {
    const computer = new Trainer('Ash', true);
    const inputCopy = { ...pokemon.eevee };
    computerReleaseLog(pokemon.eevee, computer.name);
    expect(pokemon.eevee).toEqual(inputCopy);
  });
});
