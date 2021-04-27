// Есть объекты:

const head = {
  glasses: 1,
};

const table = {
  pen: 3,
};

const bed = {
  sheet: 1,
  pillow: 2,
};

const pockets = {
  money: 2000,
};

// Присвойте объектам прототипы так,
// чтобы любой поиск чего - либо шёл по алгоритму
// pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
