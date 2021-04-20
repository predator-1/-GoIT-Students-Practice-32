/**
 * Создать объект person1 с полем name и getName которая вернет поле name
 * Создать объект person2 с полем name и присвоить person2.getName = person1.getName
 * Вывести результат обоих getName в консоль
 */

const person1 = {
  name: 'Ivan',
  getName() {
    return this.name;
  },
};

const person2 = {
  name: 'Dmitro',
};

person2.getName = person1.getName;

console.log(person2.getName.call(person1));
