/**
 * Create email field validation after pressing Enter
 * Prevent closing window
 */
const input = document.querySelector('#email-input');
const error = document.querySelector('#error-text');

input.addEventListener('keypress', e => {
  if (e.code === 'Enter') {
    if (e.target.value.includes('@')) {
      error.style.display = 'none';
    } else {
      error.style.display = 'block';
    }
  }
});

window.onbeforeunload = function () {
  return 'Are you sure?';
};
