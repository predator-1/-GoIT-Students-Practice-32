// Выполнить сортировку массива названий мониторов
// в алфавитном и обратном алфавитном порядке.

const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];
const items2 = ['Huawei', 'Apple', 'ASUS', 'dell', 'BENQ'];

const ascCompare = (prev, next) => {
  return prev.toLowerCase() > next.toLowerCase() ? 1 : -1;
};

// const descCompare = (prev, next) => {
//   return prev.toLowerCase() < next.toLowerCase() ? 1 : -1;
// };

console.log(items.sort(ascCompare));
console.log(items2.sort(ascCompare));

console.log(items.sort(ascCompare).reverse());
console.log(items2.sort(ascCompare).reverse());
