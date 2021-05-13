// Отсортируй массив по height, если они одинаковые - то по age
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const users = [
  {
    firstName: 'Bobby',
    height: 180,
    age: 25,
  },
  {
    firstName: 'Chris',
    height: 160,
    age: 20,
  },
  {
    firstName: 'Peter',
    height: 180,
    age: 15,
  },
  {
    firstName: 'Jimmy',
    height: 170,
    age: 30,
  },
];

users.sort((a, b) => a.height - b.height || a.age - b.age);

console.log(users);
