/**
 * Найдите елемент с самой большой ценой price
 * Найдите самый минимальный price
 */

const phones = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
  { name: 'Apple', price: 1100 },
  { name: 'Samsung', price: 700 },
  { name: 'Apple', price: 800 },
  { name: 'Huawei', price: 950 },
  { name: 'Samsung', price: 1000 },
  { name: 'Huawei', price: 650 },
];

const getItemWithMaxPrice = items => {
  return items.reduce((acc, item) => {
    return acc.price < item.price ? item : acc;
  });
};

console.log(getItemWithMaxPrice(phones));

const getMinPrice = items => {
  return items.reduce((acc, item) => {
    if (acc > item.price) {
      return item.price;
    }
    return acc;
  }, Number.MAX_SAFE_INTEGER);
};

console.log(getMinPrice(phones));
console.log(getMinPrice([]));
