/**
 * Области применения
 * Поробовать использовать глобально и внутри функции.
 * Вывести все возможные this в консоль
 */
'use strict';
console.log(this);

function test() {
  console.log(this);
  return () => {
    console.log(this);
  };
}

function test2() {
  console.log(this);
}

const fun = test();
fun();
test2();
