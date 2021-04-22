// Напишите функцию сложения вида add(num1)(num2)
// console.log(add(2)(5)(7)()); // 14
// add() // 0

const add = function (n) {
  let result = 0;
  const addToResult = function (num) {
    if (num === undefined) return result;

    result += num;
    return addToResult;
  };
  return addToResult(n);
};

console.log(add());
console.log(add(2)(5)(8)());
