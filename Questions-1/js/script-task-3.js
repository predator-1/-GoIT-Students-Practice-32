// Создайте записную книжку куда можно
// внести имя и номер телефона человека
// найти номер по имени
// показать количество контактов
// удалить контакт по имени
// HashMap
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map

class Contacts {
  #contacts = new Map();

  add(name, phone) {
    this.#contacts.set(name, phone);
  }

  get count() {
    return this.#contacts.size;
  }

  findContact(name) {
    return this.#contacts.get(name);
  }
}

const contacts = new Contacts();

contacts.add('Anna', '123');
contacts.add('Anna', '345');

console.log(contacts.count);

console.log(contacts.findContact('Anna1'));
