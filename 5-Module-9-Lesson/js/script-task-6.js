/**
 * Что выведет консоль?
 */
const animal = { jumps: null };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal);

console.log(1, rabbit.jumps);

delete rabbit.jumps;
console.log(2, rabbit.jumps);

delete animal.jumps;
console.log(3, rabbit.jumps);

function Rabbit() {}
Rabbit.prototype = { eats: true };
const rabbit2 = new Rabbit();
rabbit2.eats = false;

delete Rabbit.prototype.eats;
console.log(4, rabbit2.eats);
