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

const changeUserSalary = function (user, value) {
  changeSalary.apply(user, [value]);
};
// changeUserSalary(user1, 100);
// changeUserSalary(user2, -100);
// console.log(user1);
// console.log(user2);
// function changeUserSalary(user, )

changeUserSalary = 2;
