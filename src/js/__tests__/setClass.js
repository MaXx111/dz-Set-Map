import BowermanCharacter from '../childClasses/Bowerman.js';
import SwordsmanCharacter from '../childClasses/Swordsman.js';
import UndeadCharacter from '../childClasses/Undead.js';
import ZombieCharacter from '../childClasses/Zombie.js';
import Team from '../setClass.js';

test('Should add 2 members', () => {
  const member1 = new BowermanCharacter('justABoy', 'Bowerman');
  const member2 = new ZombieCharacter('justABoy', 'Zombie');
  const team = new Team();
  team.add(member1);
  team.add(member2);
  const expct = team.members.size;
  expect(expct).toEqual(2);
});

test('Should throw error', () => {
  const member1 = new BowermanCharacter('justABoy', 'Bowerman');
  const team = new Team();
  team.add(member1);
  expect(() => team.add(member1)).toThrow();
});

test('Should add all members', () => {
  const member1 = new BowermanCharacter('justABoy', 'Bowerman');
  const member2 = new ZombieCharacter('justABoy', 'Zombie');
  const member3 = new UndeadCharacter('justABoy', 'Undead');
  const member4 = new SwordsmanCharacter('justABoy', 'Swordsman');
  const team = new Team();
  team.addAll(member1, member2, member3, member4, member1, member2);
  const expct = team.members.size;
  expect(expct).toEqual(4);
});

test('Should return array', () => {
  const member1 = new BowermanCharacter('justABoy', 'Bowerman');
  const member2 = new ZombieCharacter('justABoy', 'Zombie');
  const team = new Team();
  team.add(member1);
  team.add(member2);
  const expct = team.toArray();
  expect(expct.length).toEqual(2);
});
