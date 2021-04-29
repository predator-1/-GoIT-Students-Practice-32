class Counter {
  #count = 0;
  _count = 0;

  #privateMethod = function () {
    console.log('I am private');
  };

  increment() {
    this.#privateMethod();
    return (this.#count += 1);
  }

  decrement() {
    this.text = 1;
    return (this.#count -= 1);
  }
}

const counter = new Counter();
counter.increment();
