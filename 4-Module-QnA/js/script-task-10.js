const counter = function () {
  return (this.i += 1);
};

const con1 = counter.bind({ i: 0 });
console.log(con1());
console.log(con1());
const con2 = counter.bind({ i: 0 });
console.log(con2());
console.log(con1());
