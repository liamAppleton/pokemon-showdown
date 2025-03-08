const {
  Pokemon,
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
} = require('../classes');

let lopunny, charizard, squirtle, leafeon, jolteon, fearow, machamp;
beforeEach(() => {
  lopunny = new NormalPokemon('Lopunny', 'Tackle', 100, 20);
  charizard = new FirePokemon('Charizard', 'Ember', 100, 20);
  squirtle = new WaterPokemon('Squirtle', 'Hydro', 100, 20);
  leafeon = new GrassPokemon('Leafeon', 'Tangle', 100, 20);
  jolteon = new ElectricPokemon('Jolteon', 'Shock', 100, 20);
  fearow = new FlyingPokemon('Fearow', 'Gust', 100, 20);
  machamp = new FightingPokemon('Machamp', 'Box', 100, 20);
});

describe('NormalPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(lopunny instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(lopunny.type).toBe('Normal');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof lopunny.calculateDamageMultiplier).toBe('function');
      });
      test('should return 1 when passed any pokemon', () => {
        expect(lopunny.calculateDamageMultiplier(leafeon)).toBe(1);
      });
    });
  });
});

describe('FirePokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(charizard instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(charizard.type).toBe('Fire');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof charizard.calculateDamageMultiplier).toBe('function');
      });
      test('should return 2 when passed a grass pokemon', () => {
        expect(charizard.calculateDamageMultiplier(leafeon)).toBe(2);
      });
      test('should return 0.5 when passed fire or water pokemon', () => {
        expect(charizard.calculateDamageMultiplier(squirtle)).toBe(0.5);
        expect(charizard.calculateDamageMultiplier(charizard)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(charizard.calculateDamageMultiplier(jolteon)).toBe(1);
      });
    });
  });
});

describe('WaterPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(squirtle instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(squirtle.type).toBe('Water');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof squirtle.calculateDamageMultiplier).toBe('function');
      });
      test('should return 2 when passed a fire pokemon', () => {
        expect(squirtle.calculateDamageMultiplier(charizard)).toBe(2);
      });
      test('should return 0.5 when passed water or grass pokemon', () => {
        expect(squirtle.calculateDamageMultiplier(squirtle)).toBe(0.5);
        expect(squirtle.calculateDamageMultiplier(leafeon)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(squirtle.calculateDamageMultiplier(jolteon)).toBe(1);
      });
    });
  });
});

describe('GrassPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(leafeon instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(leafeon.type).toBe('Grass');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof leafeon.calculateDamageMultiplier).toBe('function');
      });
      test('should return 2 when passed a water pokemon', () => {
        expect(leafeon.calculateDamageMultiplier(squirtle)).toBe(2);
      });
      test('should return 0.5 when passed grass or fire pokemon', () => {
        expect(leafeon.calculateDamageMultiplier(leafeon)).toBe(0.5);
        expect(leafeon.calculateDamageMultiplier(charizard)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(leafeon.calculateDamageMultiplier(jolteon)).toBe(1);
      });
    });
  });
});

describe('ElectricPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(jolteon instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(jolteon.type).toBe('Electric');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof jolteon.calculateDamageMultiplier).toBe('function');
      });
      test('should return 2 when passed a water or flying pokemon', () => {
        expect(jolteon.calculateDamageMultiplier(squirtle)).toBe(2);
        expect(jolteon.calculateDamageMultiplier(fearow)).toBe(2);
      });
      test('should return 0.5 when passed electric or grass pokemon', () => {
        expect(jolteon.calculateDamageMultiplier(jolteon)).toBe(0.5);
        expect(jolteon.calculateDamageMultiplier(leafeon)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(jolteon.calculateDamageMultiplier(machamp)).toBe(1);
      });
    });
  });
});

describe('FlyingPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(fearow instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(fearow.type).toBe('Flying');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof fearow.calculateDamageMultiplier).toBe('function');
      });
      test('should return 2 when passed a grass or fighting pokemon', () => {
        expect(fearow.calculateDamageMultiplier(leafeon)).toBe(2);
        expect(fearow.calculateDamageMultiplier(machamp)).toBe(2);
      });
      test('should return 0.5 when passed electric pokemon', () => {
        expect(fearow.calculateDamageMultiplier(jolteon)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(fearow.calculateDamageMultiplier(charizard)).toBe(1);
      });
    });
  });
});

describe('FightingPokemon Class', () => {
  test('should inherit from Pokemon class', () => {
    expect(machamp instanceof Pokemon).toBe(true);
  });

  describe('properties', () => {
    test('should have a type property', () => {
      expect(machamp.type).toBe('Fighting');
    });
  });

  describe('methods', () => {
    describe('calculateDamageMultiplier()', () => {
      test('instances should have a calculateDamageMultiplier method', () => {
        expect(typeof machamp.calculateDamageMultiplier).toBe('function');
      });
      test('should return 2 when passed a normal pokemon', () => {
        expect(machamp.calculateDamageMultiplier(lopunny)).toBe(2);
      });
      test('should return 0.5 when passed flying pokemon', () => {
        expect(machamp.calculateDamageMultiplier(fearow)).toBe(0.5);
      });
      test('should return 1 when passed any other pokemon', () => {
        expect(machamp.calculateDamageMultiplier(charizard)).toBe(1);
      });
    });
  });
});
