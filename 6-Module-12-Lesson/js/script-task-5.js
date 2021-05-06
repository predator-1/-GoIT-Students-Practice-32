// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

const positiveNums = [4, 6, 7, 3, 9];
const positiveAndNegativeNums = [4, -6, -7, -3, 9];

// Проверьте то, что все элементы в массиве больше нуля.

// const checkPositiveNums = positiveNums.every(x => x > 0);
//const checkPositiveNums = !positiveNums.some(x => x <= 0);

//const checkPositiveAndNegativeNums = positiveAndNegativeNums.every(x => x > 0);
//const checkPositiveAndNegativeNums = !positiveAndNegativeNums.some(x => x <= 0);

// Проверьте то, что в нем есть отрицательные элементы.
// const checkPositiveNums = positiveNums.some(x => x < 0);

// const checkPositiveNums = !positiveNums.every(x => x >= 0);

// const checkPositiveAndNegativeNums = positiveAndNegativeNums.some(x => x < 0);

// const checkPositiveAndNegativeNums = !positiveAndNegativeNums.every(
//   x => x >= 0,
// );

// Посчитайте количество отрицательных чисел в этом массиве.

const sumReduce = (acc, item) => (item < 0 ? ++acc : acc);
const checkPositiveNums = positiveNums.reduce(sumReduce, 0);
const checkPositiveAndNegativeNums = positiveAndNegativeNums.reduce(
  sumReduce,
  0,
);

console.log({ checkPositiveNums });
console.log({ checkPositiveAndNegativeNums });
