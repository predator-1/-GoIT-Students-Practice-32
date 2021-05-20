/**
 * Show hidden popup on blur
 */

const input = document.querySelector('input');
const popupRef = document.querySelector('.js-popup');
const popupText = document.querySelector('#js-popup-text');

const handleClosePopup = event => {
  if (event.code === 'Escape') {
    popupRef.classList.remove('popup-open');
    document.removeEventListener('keydown', handleClosePopup);
  }
};

input.addEventListener('blur', function () {
  popupRef.classList.add('popup-open');
  popupText.textContent = this.value;
  document.addEventListener('keydown', handleClosePopup);
});
