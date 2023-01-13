import Character from '../Character.js';

export default class UndeadCharacter extends Character {
  constructor(name, type) {
    if(type !== 'Undead'){
      throw error;
    }
    super(name, type);
    this.type = type;
    this.name = name;

    this.defense = 25;
    this.attack = 25;
  }
}
