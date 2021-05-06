// Напишите функцию getAverage(numbers),
// которая принимает массив чисел и возвращает среднее
const cuurentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const getAverage = numbers => {
//   let accum = 0;
//   for (const num of numbers) {
//     accum += num;
//   }
//   return accum / numbers.length;
// };

const getAverage = numbers => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

console.log(getAverage(cuurentNumbers));
