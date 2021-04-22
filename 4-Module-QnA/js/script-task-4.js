// Есть функция changeSalary
// и пользователи
// напишите функцию, которая принимает пользователя и число
// и меняет ему зарплату на число с помощью ф-ии changeSalary

const changeSalary = function (value) {
  this.salary += value;
};

const user1 = {
  name: 'Den',
  salary: 1300,
};

const user2 = {
  name: 'Ann',
  salary: 2500,
};
