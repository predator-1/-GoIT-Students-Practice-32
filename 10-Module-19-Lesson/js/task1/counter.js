const template = value => `
<div class="counter">
  <button class="button decrement">-</button>
  <span class="value">${value}</span>
  <button class="button increment">+</button>
</div>
`;

export default function Counter({ selector, initialValue = 0, step = 1 }) {
  this.value = initialValue;

  document
    .querySelector(selector)
    .insertAdjacentHTML('beforeend', template(this.value));

  const refs = {
    decrement: document.querySelector(`${selector} .decrement`),
    increment: document.querySelector(`${selector} .increment`),
    value: document.querySelector(`${selector} .value`),
  };

  const render = () => {
    refs.value.textContent = this.value;
  };

  this.handleDecrement = () => {
    this.value -= step;
    render();
  };

  this.handleIncrement = () => {
    this.value += step;
    render();
  };

  refs.decrement.addEventListener('click', this.handleDecrement);
  refs.increment.addEventListener('click', this.handleIncrement);
}
