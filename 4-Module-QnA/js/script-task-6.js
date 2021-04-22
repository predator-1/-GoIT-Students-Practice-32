// Напишите функцию, которая принимает число - степень
// и возвращает функцию,
// которая принимает число и возводит его в переданную
// ранее степень

const makePower1 = powNum => {
  ///////////////////////////////3///////10
  return currentNum => Math.pow(powNum, currentNum);
};

const makePower2 = currentNum => Math.pow.bind(null, currentNum);

const powTwo1 = makePower1(3);
const powTwo2 = makePower2(3);

console.log(powTwo1(10));
console.log(powTwo2(10));
