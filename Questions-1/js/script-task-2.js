// Вы пригласили гостей и хотите посчитать их на входе
// Гости иногда выходят из дома и возвращаются
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

const guest1 = {
  name: 'Ann',
};

const guest2 = {
  name: 'Bob',
};

const guest3 = {
  name: 'Daria',
};

const guest4 = {
  name: 'Ivan',
};

const guest5 = {
  name: 'Ivan',
};

class TikTokHouse {
  #guests = new Set();

  addGuest(guest) {
    // ===
    this.#guests.add(guest);
  }

  get guestsCount() {
    return this.#guests.size;
  }
}

const house = new TikTokHouse();

house.addGuest(guest1);
house.addGuest(guest2);
house.addGuest(guest3);
house.addGuest(guest4);

console.log(house.guestsCount);

house.addGuest(guest2);
house.addGuest(guest3);
house.addGuest(guest5);
console.log(house.guestsCount);
