export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(code, text) {
    if (!this.errors.has(code)) {
      this.errors.set(code, text);
    } else {
      throw new Error('Ошибка с таким кодом уже существует!');
    }
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
