/**
 * Bind
 *
 * Создайте метод counter который будет из this брать i и увеличивать его на
 *      единицу. После возвращать i.
 * Используйте bind чтобы установить переменной i разные значения
 *
 * Выведите результат в консоль
 */

const getCounter = function () {
  return function () {
    return (this.i += 1);
  };
};

const counter1 = getCounter().bind({ i: 0 });
const counter2 = getCounter().bind({ i: 10 });
console.log(counter1());
console.log(counter2());
