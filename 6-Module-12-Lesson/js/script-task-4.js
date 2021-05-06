/**
 * Найдите цену Apple
 */

const phones = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
];

// console.log(phones.find(item => item.name === 'Apple').price);

// Дан массив со строками. Оставьте в нем только те строки,
// длина которых больше 5-ти символов.
const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];

console.log(items.filter(s => s.length > 5));
