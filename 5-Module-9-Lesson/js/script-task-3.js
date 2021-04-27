/**
 * Создайте конструктор объекта page со свойствами links[] и photos[]
 * добавьте к прототипу объекта методы которые выведут количество
 * links и photos
 */

const Page = function (links, photos) {
  this.links = links ?? [];
  this.photos = photos ?? [];
};

Page.prototype.getLinksCount = function () {
  return this.links.length;
};

Page.prototype.getPhotosCount = function () {
  return this.photos.length;
};

const page = new Page(['link1', 'link2'], ['photo1']);
console.log(page.getLinksCount());
console.log(page.getPhotosCount());

page.__proto__.getAllCount = function () {
  return this.links.length + this.photos.length;
};
console.log(page.getAllCount());

const p2 = new Page();
console.log(p2);
