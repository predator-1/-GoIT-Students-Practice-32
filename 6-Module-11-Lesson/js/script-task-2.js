// Напишите функцию filterRange(arr, min, max),
// которая принимает массив arr,
// ищет в нём элементы между a и b
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив
// и не изменять исходный.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isInRange = (min, max) => {
  return n => n >= min && n <= max;
};

// const filterRange = (arr, callback) => {
//   const result = [];
//   arr.forEach(num => {
//     if (callback(num)) {
//       result.push(num);
//     }
//   });
//   return result;
// };

const filterFun = isInRange(min, max);
const filterRange = (arr, min, max) => arr.filter(filterFun);
const filterRange = (arr, min, max) => arr.filter(n => n >= min && n <= max);

console.log('filtered', filterRange(numbers, 3, 7));

console.log('numbers', numbers);
