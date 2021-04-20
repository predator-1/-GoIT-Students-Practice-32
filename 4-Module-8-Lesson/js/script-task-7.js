/**
 * Создайте функцию myPassword(password) которая будет хранить
 * внутри password и вернет объект с функцией guessPassword(testPassword), которая
 * вернет true если testPassword и password внутри функции совпадут
 * и false если не совпадут
 */

const myPassword = function (password) {
  return function (myPass) {
    return myPass === password;
  };
};

const testMyPassword = myPassword('myPassThis');

console.log(testMyPassword('123123'));
console.log(testMyPassword('myPassThis'));
