const key = 'todoList';

export default class LocalStorage {
  static save(todos) {
    localStorage.setItem(key, JSON.stringify(todos));
  }

  static load() {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
