const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  ElectricPokemon,
  FlyingPokemon,
  FightingPokemon,
} = require('../classes');

const eevee = new NormalPokemon('Eevee', 'Tackle', 70, 20);
const snorlax = new NormalPokemon('Snorlax', 'Body Slam', 180, 30);
const pidgey = new NormalPokemon('Pidgey', 'Gust', 55, 15);
const meowth = new NormalPokemon('Meowth', 'Scratch', 60, 18);
const regigigas = new NormalPokemon('Regigigas', 'Crush Grip', 130, 40);

const charmander = new FirePokemon('Charmander', 'Flamethrower', 60, 25);
const vulpix = new FirePokemon('Vulpix', 'Fire Spin', 55, 22);
const moltres = new FirePokemon('Moltres', 'Sacred Fire', 120, 35);
const ponyta = new FirePokemon('Ponyta', 'Flame Wheel', 65, 27);
const magmar = new FirePokemon('Magmar', 'Fire Punch', 80, 30);

const squirtle = new WaterPokemon('Squirtle', 'Water Gun', 70, 20);
const psyduck = new WaterPokemon('Psyduck', 'Bubble Beam', 68, 22);
const poliwag = new WaterPokemon('Poliwag', 'Hydro Pump', 65, 23);
const kyogre = new WaterPokemon('Kyogre', 'Origin Pulse', 140, 38);
const starmie = new WaterPokemon('Starmie', 'Surf', 80, 30);

const bulbasaur = new GrassPokemon('Bulbasaur', 'Vine Whip', 72, 22);
const celebi = new GrassPokemon('Celebi', 'Leaf Storm', 120, 33);
const bellsprout = new GrassPokemon('Bellsprout', 'Solar Beam', 68, 24);
const exeggcute = new GrassPokemon('Exeggcute', 'Seed Bomb', 75, 26);
const tangela = new GrassPokemon('Tangela', 'Power Whip', 85, 28);

const pikachu = new ElectricPokemon('Pikachu', 'Thunderbolt', 60, 24);
const zapdos = new ElectricPokemon('Zapdos', 'Thunder', 125, 38);
const magnemite = new ElectricPokemon('Magnemite', 'Thunder Shock', 65, 23);
const electabuzz = new ElectricPokemon('Electabuzz', 'Thunder Punch', 80, 28);
const jolteon = new ElectricPokemon('Jolteon', 'Discharge', 85, 30);

const pidgeotto = new FlyingPokemon('Pidgeotto', 'Wing Attack', 75, 22);
const spearow = new FlyingPokemon('Spearow', 'Peck', 60, 18);
const zubat = new FlyingPokemon('Zubat', 'Air Slash', 58, 16);
const lugia = new FlyingPokemon('Lugia', 'Aeroblast', 140, 35);
const aerodactyl = new FlyingPokemon('Aerodactyl', 'Sky Attack', 105, 32);

const machop = new FightingPokemon('Machop', 'Karate Chop', 80, 26);
const hitmonlee = new FightingPokemon('Hitmonlee', 'High Jump Kick', 70, 28);
const hitmonchan = new FightingPokemon('Hitmonchan', 'Mega Punch', 70, 26);
const mankey = new FightingPokemon('Mankey', 'Cross Chop', 65, 25);
const terrakion = new FightingPokemon('Terrakion', 'Sacred Sword', 130, 40);

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
