/**
 * Create TODO list
 */

let currentId = 0;

const getTask = text => `
     <li data-id=${currentId++}>
     <span>${text}</span>
     <button type="button" id="done-${currentId++}" class="done" aria-label="Done">
         &radic;
     </button>
     <button type="button" class="close" aria-label="Close">
         &times;
     </button>
     </li>
 `;

const list = document.querySelector('ol');
const input = document.querySelector('#add-input');

document.getElementById('add-btn').addEventListener('click', () => {
  list.insertAdjacentHTML('beforeend', getTask(input.value));
  input.value = '';
  const todos = document.querySelectorAll('li');
  const currentTODO = todos[todos.length - 1];
  currentTODO.querySelector('.close').addEventListener('click', e => {
    currentTODO.remove();
  });
  const doneEvent = () => {
    currentTODO.style.background = 'green';
    currentTODO.querySelector('.done').removeEventListener('click', doneEvent);
  };
  currentTODO.querySelector('.done').addEventListener('click', doneEvent);
});
