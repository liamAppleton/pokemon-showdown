const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
} = require('../classes');

const eevee = new NormalPokemon('Eevee', 'Tackle', 70, 30);
const snorlax = new NormalPokemon('Snorlax', 'Body Slam', 180, 50);
const pidgey = new NormalPokemon('Pidgey', 'Gust', 55, 25);
const meowth = new NormalPokemon('Meowth', 'Scratch', 60, 35);
const regigigas = new NormalPokemon('Regigigas', 'Crush Grip', 130, 70);

const charmander = new FirePokemon('Charmander', 'Flamethrower', 60, 40);
const vulpix = new FirePokemon('Vulpix', 'Fire Spin', 55, 38);
const moltres = new FirePokemon('Moltres', 'Sacred Fire', 120, 70);
const ponyta = new FirePokemon('Ponyta', 'Flame Wheel', 65, 45);
const magmar = new FirePokemon('Magmar', 'Fire Punch', 80, 50);

const squirtle = new WaterPokemon('Squirtle', 'Water Gun', 70, 35);
const psyduck = new WaterPokemon('Psyduck', 'Bubble Beam', 68, 38);
const poliwag = new WaterPokemon('Poliwag', 'Hydro Pump', 65, 42);
const kyogre = new WaterPokemon('Kyogre', 'Origin Pulse', 140, 75);
const starmie = new WaterPokemon('Starmie', 'Surf', 80, 50);

const bulbasaur = new GrassPokemon('Bulbasaur', 'Vine Whip', 72, 38);
const celebi = new GrassPokemon('Celebi', 'Leaf Storm', 120, 65);
const bellsprout = new GrassPokemon('Bellsprout', 'Solar Beam', 68, 42);
const exeggcute = new GrassPokemon('Exeggcute', 'Seed Bomb', 75, 48);
const tangela = new GrassPokemon('Tangela', 'Power Whip', 85, 55);

const pikachu = new ElectricPokemon('Pikachu', 'Thunderbolt', 60, 40);
const zapdos = new ElectricPokemon('Zapdos', 'Thunder', 125, 70);
const magnemite = new ElectricPokemon('Magnemite', 'Thunder Shock', 65, 42);
const electabuzz = new ElectricPokemon('Electabuzz', 'Thunder Punch', 80, 50);
const jolteon = new ElectricPokemon('Jolteon', 'Discharge', 85, 52);

const pidgeotto = new FlyingPokemon('Pidgeotto', 'Wing Attack', 75, 42);
const spearow = new FlyingPokemon('Spearow', 'Peck', 60, 35);
const zubat = new FlyingPokemon('Zubat', 'Air Slash', 58, 32);
const lugia = new FlyingPokemon('Lugia', 'Aeroblast', 140, 75);
const aerodactyl = new FlyingPokemon('Aerodactyl', 'Sky Attack', 105, 65);

const machop = new FightingPokemon('Machop', 'Karate Chop', 80, 50);
const hitmonlee = new FightingPokemon('Hitmonlee', 'High Jump Kick', 70, 55);
const hitmonchan = new FightingPokemon('Hitmonchan', 'Mega Punch', 70, 50);
const mankey = new FightingPokemon('Mankey', 'Cross Chop', 65, 45);
const terrakion = new FightingPokemon('Terrakion', 'Sacred Sword', 130, 70);

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
