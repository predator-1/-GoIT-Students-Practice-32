/**
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items.
 * Заметка это объект со свойствами text и priority.
 * Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
 * Добавь методы addNote(note), removeNote(text) и updateNotePriority(text, newPriority).
 */

class Note {
  static Priority = {
    LOW: 1,
    NORMAL: 2,
    HIGH: 3,
  };

  constructor(text, priority) {
    this.text = text;
    this.priority = priority;
  }
}

class Notes {
  #notes = [];

  addNote(note) {
    this.#notes.push(note);
  }

  removeNote(note) {
    const index = this.#notes.findIndex(value => value.text === note.text);
    if (index > -1) {
      this.#notes.splice(index, 1);
    }
  }

  unpdateNotePriority(text, newPriority) {
    for (const note of this.#notes) {
      if (note.text !== text) continue;

      note.priority = newPriority;
    }
  }

  get notes() {
    return this.#notes.sort((a, b) => {
      return b.priority - a.priority;
    });
  }
}

const notes = new Notes();

const note1 = new Note('first', Note.Priority.NORMAL);
const note2 = new Note('second', Note.Priority.HIGH);
const note3 = new Note('third', Note.Priority.LOW);

notes.addNote(note1);
notes.addNote(note2);
notes.addNote(note3);

console.log(notes.notes);
notes.removeNote(note2);
notes.unpdateNotePriority('first', Note.Priority.HIGH);
console.log(notes.notes);
