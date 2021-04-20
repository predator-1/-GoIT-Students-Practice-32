/**
 * Создайе функцию hostGuests которая вернет имя дома и гостей в нем
 * вызовите ее с помощью call и apply задав контекст и гостей как аргумент
 */

const hostGuests = function (currentGuests) {
  return `${this.house} with ${currentGuests.join(', ')}`;
};

const guests = ['Anna', 'Jack', 'Jimm'];

const place1 = {
  house: 'Palace',
};

const place2 = {
  house: 'Sarai',
};

console.log(hostGuests.apply(place1, guests));
