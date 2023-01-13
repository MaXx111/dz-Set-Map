import Character from '../Character.js';

export default class MagicianCharacter extends Character {
  constructor(name, type) {
    if(type !== 'Magician'){
      throw error;
    }
    super(name, type);
    this.type = type;
    this.name = name;

    this.defense = 40;
    this.attack = 10;
  }
}
