/**
 * Пример 2 - перепишите классы  Worker, Boss 
    с использованием классов

class A {
  constructor() {
    console.log('A created');
  }
}

class B extends A {
  constructor() {
    super();
    console.log('B created');
  }
}

const a1 = new A();
const b1 = new B();
*/

class Worker {
  constructor({ firstname, lastname, rate, days }) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._rate = rate;
    this._days = days;
  }

  getSalary() {
    return this._rate * this._days;
  }

  getFullName() {
    return `${this._firstname} ${this._lastname}`;
  }
}

class Boss extends Worker {
  constructor({ firstname, lastname, rate, days, workersCount }) {
    super({ firstname, lastname, rate, days });
    this._workersCount = workersCount;
  }

  getSalary() {
    return super.getSalary() * this._workersCount;
  }
}

const worker = new Worker({
  firstname: 'Ivan',
  lastname: 'Petrov',
  rate: 10,
  days: 50,
});

console.log(worker.getFullName(), worker.getSalary());

const boss = new Boss({
  firstname: 'Fedor',
  lastname: 'Sumkin',
  rate: 15,
  days: 50,
  workersCount: 5,
});

console.log(boss.getFullName(), boss.getSalary());
