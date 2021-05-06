/**
 * Написать функцию которая определит массив
 * содеражщий только цифры
 */

const array1 = [2, 4, '1'];
const array2 = [2, 4, 1];

const isNumber = array => {
  return array.some(value => typeof value !== 'number');
  // return array.some(value => !Number.isNaN(value));
};

console.log(isNumber(array1));
console.log(isNumber(array2));
