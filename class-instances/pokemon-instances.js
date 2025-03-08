const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
} = require('../classes');

const eevee = new NormalPokemon('Eevee', 'Tackle', 55, 40);
const snorlax = new NormalPokemon('Snorlax', 'Body Slam', 160, 85);
const pidgey = new NormalPokemon('Pidgey', 'Gust', 40, 30);
const meowth = new NormalPokemon('Meowth', 'Scratch', 50, 45);
const regigigas = new NormalPokemon('Regigigas', 'Crush Grip', 110, 110);

const charmander = new FirePokemon('Charmander', 'Flamethrower', 39, 60);
const vulpix = new FirePokemon('Vulpix', 'Fire Spin', 38, 50);
const moltres = new FirePokemon('Moltres', 'Sacred Fire', 90, 100);
const ponyta = new FirePokemon('Ponyta', 'Flame Wheel', 50, 65);
const magmar = new FirePokemon('Magmar', 'Fire Punch', 65, 75);

const squirtle = new WaterPokemon('Squirtle', 'Water Gun', 44, 48);
const psyduck = new WaterPokemon('Psyduck', 'Bubble Beam', 50, 52);
const poliwag = new WaterPokemon('Poliwag', 'Hydro Pump', 40, 55);
const kyogre = new WaterPokemon('Kyogre', 'Origin Pulse', 100, 120);
const starmie = new WaterPokemon('Starmie', 'Surf', 60, 70);

const bulbasaur = new GrassPokemon('Bulbasaur', 'Vine Whip', 45, 49);
const celebi = new GrassPokemon('Celebi', 'Leaf Storm', 100, 100);
const bellsprout = new GrassPokemon('Bellsprout', 'Solar Beam', 50, 55);
const exeggcute = new GrassPokemon('Exeggcute', 'Seed Bomb', 60, 65);
const tangela = new GrassPokemon('Tangela', 'Power Whip', 65, 75);

const pikachu = new ElectricPokemon('Pikachu', 'Thunderbolt', 35, 55);
const zapdos = new ElectricPokemon('Zapdos', 'Thunder', 90, 110);
const magnemite = new ElectricPokemon('Magnemite', 'Thunder Shock', 50, 60);
const electabuzz = new ElectricPokemon('Electabuzz', 'Thunder Punch', 65, 75);
const jolteon = new ElectricPokemon('Jolteon', 'Discharge', 65, 80);

const pidgeotto = new FlyingPokemon('Pidgeotto', 'Wing Attack', 63, 60);
const spearow = new FlyingPokemon('Spearow', 'Peck', 40, 50);
const zubat = new FlyingPokemon('Zubat', 'Air Slash', 40, 45);
const lugia = new FlyingPokemon('Lugia', 'Aeroblast', 106, 110);
const aerodactyl = new FlyingPokemon('Aerodactyl', 'Sky Attack', 80, 105);

const machop = new FightingPokemon('Machop', 'Karate Chop', 70, 60);
const hitmonlee = new FightingPokemon('Hitmonlee', 'High Jump Kick', 50, 85);
const hitmonchan = new FightingPokemon('Hitmonchan', 'Mega Punch', 50, 75);
const mankey = new FightingPokemon('Mankey', 'Cross Chop', 40, 70);
const terrakion = new FightingPokemon('Terrakion', 'Sacred Sword', 91, 110);

module.exports = {
  eevee,
  snorlax,
  pidgey,
  meowth,
  regigigas,
  charmander,
  vulpix,
  moltres,
  ponyta,
  magmar,
  squirtle,
  psyduck,
  poliwag,
  kyogre,
  starmie,
  bulbasaur,
  celebi,
  bellsprout,
  exeggcute,
  tangela,
  pikachu,
  zapdos,
  magnemite,
  electabuzz,
  jolteon,
  pidgeotto,
  spearow,
  zubat,
  lugia,
  aerodactyl,
  machop,
  hitmonlee,
  hitmonchan,
  mankey,
  terrakion,
};
