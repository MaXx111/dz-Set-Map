import BowermanCharacter from '../childClasses/Bowerman.js';
import DaemonCharacter from '../childClasses/Daemon.js';
import MagicianCharacter from '../childClasses/Magician.js';
import SwordsmanCharacter from '../childClasses/Swordsman.js';
import UndeadCharacter from '../childClasses/Undead.js';
import ZombieCharacter from '../childClasses/Zombie.js';

// For BowermanCharacter
test('Should get right characteristic', () => {
  const result = new BowermanCharacter('justABoy', 'Bowerman');
  const expct = {
    health: 100, level: 1, name: 'justABoy', type: 'Bowerman', attack: 25, defense: 25,
  };
  expect(result).toEqual(expct);
});

test('Should set levelUp and up attack, defense, health', () => {
  const result = new BowermanCharacter('justABoy', 'Bowerman');
  result.levelUp();

  const expct = {
    health: 100, level: 2, name: 'justABoy', type: 'Bowerman', attack: 30, defense: 30,
  };
  expect(result).toEqual(expct);
});

test('Should change health', () => {
  const result = new BowermanCharacter('justABoy', 'Bowerman');
  result.damage(20);

  const expct = {
    health: 85, level: 1, name: 'justABoy', type: 'Bowerman', attack: 25, defense: 25,
  };
  expect(result).toEqual(expct);
});

// For DaemonCharacter
test('Should get right characteristic', () => {
  const result = new DaemonCharacter('justABoy', 'Daemon');
  const expct = {
    health: 100, level: 1, name: 'justABoy', type: 'Daemon', attack: 10, defense: 40,
  };
  expect(result).toEqual(expct);
});

test('Should set levelUp and up attack, defense, health', () => {
  const result = new DaemonCharacter('justABoy', 'Daemon');
  result.levelUp();

  const expct = {
    health: 100, level: 2, name: 'justABoy', type: 'Daemon', attack: 12, defense: 48,
  };
  expect(result).toEqual(expct);
});

test('Should change health', () => {
  const result = new DaemonCharacter('justABoy', 'Daemon');
  result.damage(20);

  const expct = {
    health: 88, level: 1, name: 'justABoy', type: 'Daemon', attack: 10, defense: 40,
  };
  expect(result).toEqual(expct);
});

// for MagicianCharacter
test('Should get right characteristic', () => {
  const result = new MagicianCharacter('justABoy', 'Magician');
  const expct = {
    health: 100, level: 1, name: 'justABoy', type: 'Magician', attack: 10, defense: 40,
  };
  expect(result).toEqual(expct);
});

test('Should set levelUp and up attack, defense, health', () => {
  const result = new MagicianCharacter('justABoy', 'Magician');
  result.levelUp();

  const expct = {
    health: 100, level: 2, name: 'justABoy', type: 'Magician', attack: 12, defense: 48,
  };
  expect(result).toEqual(expct);
});

test('Should change health', () => {
  const result = new MagicianCharacter('justABoy', 'Magician');
  result.damage(20);

  const expct = {
    health: 88, level: 1, name: 'justABoy', type: 'Magician', attack: 10, defense: 40,
  };
  expect(result).toEqual(expct);
});

// for SwordsmanCharacter
test('Should get right characteristic', () => {
  const result = new SwordsmanCharacter('justABoy', 'Swordsman');
  const expct = {
    health: 100, level: 1, name: 'justABoy', type: 'Swordsman', attack: 40, defense: 10,
  };
  expect(result).toEqual(expct);
});

test('Should set levelUp and up attack, defense, health', () => {
  const result = new SwordsmanCharacter('justABoy', 'Swordsman');
  result.levelUp();

  const expct = {
    health: 100, level: 2, name: 'justABoy', type: 'Swordsman', attack: 48, defense: 12,
  };
  expect(result).toEqual(expct);
});

test('Should change health', () => {
  const result = new SwordsmanCharacter('justABoy', 'Swordsman');
  result.damage(20);

  const expct = {
    health: 82, level: 1, name: 'justABoy', type: 'Swordsman', attack: 40, defense: 10,
  };
  expect(result).toEqual(expct);
});

// for UndeadCharacter
test('Should get right characteristic', () => {
  const result = new UndeadCharacter('justABoy', 'Undead');
  const expct = {
    health: 100, level: 1, name: 'justABoy', type: 'Undead', attack: 25, defense: 25,
  };
  expect(result).toEqual(expct);
});

test('Should set levelUp and up attack, defense, health', () => {
  const result = new UndeadCharacter('justABoy', 'Undead');
  result.levelUp();

  const expct = {
    health: 100, level: 2, name: 'justABoy', type: 'Undead', attack: 30, defense: 30,
  };
  expect(result).toEqual(expct);
});

test('Should change health', () => {
  const result = new UndeadCharacter('justABoy', 'Undead');
  result.damage(20);

  const expct = {
    health: 85, level: 1, name: 'justABoy', type: 'Undead', attack: 25, defense: 25,
  };
  expect(result).toEqual(expct);
});

// for ZombieCharacter
test('Should get right characteristic', () => {
  const result = new ZombieCharacter('justABoy', 'Zombie');
  const expct = {
    health: 100, level: 1, name: 'justABoy', type: 'Zombie', attack: 40, defense: 10,
  };
  expect(result).toEqual(expct);
});

test('Should set levelUp and up attack, defense, health', () => {
  const result = new ZombieCharacter('justABoy', 'Zombie');
  result.levelUp();

  const expct = {
    health: 100, level: 2, name: 'justABoy', type: 'Zombie', attack: 48, defense: 12,
  };
  expect(result).toEqual(expct);
});

test('Should change health', () => {
  const result = new ZombieCharacter('justABoy', 'Zombie');
  result.damage(20);

  const expct = {
    health: 82, level: 1, name: 'justABoy', type: 'Zombie', attack: 40, defense: 10,
  };
  expect(result).toEqual(expct);
});
