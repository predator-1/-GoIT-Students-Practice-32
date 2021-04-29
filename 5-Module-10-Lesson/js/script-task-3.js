/**
 * Напиши класс Client который создаёт объект со свойствами firstname и lastname.
 * Объяви приватные свойства #firstname и #lastname, доступ к которым сделай через
 * геттер и сеттер firstname и lastname.
 */

class Client {
  #firstname;
  #lastname;
  #initCount = 0;

  get firstname() {
    return this.#firstname;
  }

  set firstname(text) {
    this.#initCount++;
    this.#firstname = text;
  }

  get lastname() {
    return this.#lastname;
  }

  set lastname(text) {
    this.#initCount++;
    this.#lastname = text;
  }

  get initCount() {
    return this.#initCount;
  }

  get initials() {
    return this.#firstname[0] + this.#lastname[0];
  }

  getInitials = () => this.#firstname[0] + this.#lastname[0];
}

const client = new Client();

client.firstname = 'Mickle';
client.lastname = 'Todd';

console.log(client.initCount);
console.log(client.initials);
console.log(client.getInitials());
