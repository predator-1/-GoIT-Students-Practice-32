/**
 * Создайте корабль который умеет стрелять и отнаследуйте от него
 * боевой корабль
 */

const Ship = function (country, hp, captian, price) {
  this.hp = hp;
  this.country = country;
  this.price = price;
  this.captian = captian;
  // this.fire = function () {
  //   console.log(`Hi from ${this.country}`);
  // };
};

Ship.prototype.fire = function () {
  console.log(`Hi from ${this.country}. My armor is ${this.armor}`);
};

const WarShip = function (armor, ...args) {
  Ship.apply(this, args);
  this.armor = armor;
};

WarShip.prototype = Object.create(Ship.prototype);
WarShip.prototype.constructor = WarShip;

const ws = new WarShip(999, 'US', 100, 'Jack Sparrow', '99$');

ws.fire();
