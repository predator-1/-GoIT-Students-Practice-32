/**
 * Композиция - создание сложной функциональности за счет
 * объединения более простых функций. В некотором смысле,
 * композиция - это вложение функций, каждая из которых
 * передает свой результат в качестве входных данных для другой функции.
 */
// Напишите функцию compose
// Которая принимает несколько функций
// и возвращает функцию, принимающую число
// и применяющую к нему эти функции поочередно
// https://learn.javascript.ru/array-iteration

const add3 = n => n + 3;
const mult5 = n => n * 5;
const pow2 = n => n ** 2;

const f1 = add3(1);
const f2 = mult5(f1);
const f3 = pow2(f2);

const compose = function (...fns) {
  return n => {
    for (const func of fns) {
      n = func(n);
    }
    return n;
  };
};

console.log(pow2(mult5(add3(1))));
const composed = compose(add3, mult5, pow2);
console.log(composed(1));
