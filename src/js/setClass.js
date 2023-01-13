export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (!this.members.has(obj)) {
      this.members.add(obj);
    } else {
      throw new Error('Вы уже добавили этого персонажа!');
    }
  }

  addAll(...obj) {
    for (const item of obj) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
