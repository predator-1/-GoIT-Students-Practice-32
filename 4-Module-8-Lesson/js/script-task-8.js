'use strict';

// const obj = {
//   func: function () {
//     console.log('main func ' + this.number);
//     (() => console.log('arrow func ' + this.number))();
//   },
//   funcArrow: () => console.log('arrow func2 ' + this.number),
//   number: 3,
// };

// obj.funcArrow();
// (() => console.log(this))();

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a['some key'] = 4;

a[b] = 1;
a[c] = 2;

//console.log(a[b]);
console.log(a['[object Object]']);
console.log(a);

console.log(`${b}`);
