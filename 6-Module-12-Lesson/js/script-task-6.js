/**
 * Создать массив из N элементов и запонить его значениями
 * { index: текущий_индекс }
 */

// const array = [];

// for(let i=0; i<3; i++) {
//     array[i]('');
// }

const createArray = number => {
  return Array(number)
    .fill('')
    .map((_, i) => ({ index: i }));
};

console.log(createArray(3));
