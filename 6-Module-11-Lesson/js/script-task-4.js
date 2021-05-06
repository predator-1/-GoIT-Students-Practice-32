// Напишите функцию unique(arr),
// которая возвращает массив,
// содержащий только уникальные элементы arr

const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// const unique = arr =>
//   arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }

//     return acc;
//   }, []);

const unique = arr =>
  arr.filter((el, index, array) => array.indexOf(el) === index);

console.log(unique(notUniqueNumbers));
