// Напишите функцию
// makeCounter() - которая возвращает обект счетчик
// у которого есть методы
// increment() - увеличить на 1
// decrement() - уменьшить на 1
// reset() - сбросить счетчик на 0
// show() - вывести текущее значение в консоль

const makeCounter = count => {
  return {
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
    reset() {
      count = 0;
    },
    show() {
      console.log(count);
    },
  };
};

const counter = makeCounter(0);

counter.increment();
counter.show();

const counter2 = makeCounter(5);

counter2.show();
