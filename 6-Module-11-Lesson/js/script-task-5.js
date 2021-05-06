// Перемешивание
// Напишите функцию shuffle,
// которая принимает массив и возвращает новый,
// с теми же элементами, но в случайном порядке.

const numbers = [1, 2, 3, 4, 5, 6];

const shuffle = arr => {
  const result = arr.slice();

  return result.sort((a, b) => Math.random() - 0.5);
};

console.log(shuffle(numbers));

console.log(numbers);
