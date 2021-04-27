/**
 * Создайте конструтор объекта User который будет принимать
 * access и отнаследуйте от него Manager который будет принимать еще
 * documents.
 * Создайте 2 экзепляра и найдите среди них менеджера.
 */

const construct = function (access) {
  const context = {};
  User.call({}, access);
  return context;
};

const User = function (access) {
  this.access = access;
};

const Manager = function (access, documents) {
  User.call(this, access);
  this.documents = documents;
};

const user1 = new User(10);
const user2 = new User(10);
const user3 = new User(10);
const manager1 = new Manager(20, 3);
const manager2 = new Manager(20, 3);

const array = [user1, manager1, user2, user3, manager2];

for (const item of array) {
  if (item.hasOwnProperty('documents')) {
    console.log(item, 'this is manager');
  }
}
