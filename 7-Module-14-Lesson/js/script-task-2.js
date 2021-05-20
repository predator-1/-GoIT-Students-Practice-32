/**
 * Crete page with images in modal window
 * User can change image with button <- and ->
 */

const images = document.querySelectorAll('.promo-image');
const modal = document.getElementById('modal-window');
const modalContent = document.getElementById('modal-content');
const arrayImages = [];

images.forEach(el => {
  arrayImages.push(el.getAttribute('data-source'));
  el.addEventListener('click', function () {
    modal.style.display = 'block';
    modalContent.src = this.dataset.source;
  });
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('keydown', e => {
  let newIndex;
  const currentId = arrayImages.indexOf(modalContent.src);
  if (e.key === 'ArrowLeft') {
    newIndex = currentId - 1;
    if (newIndex == -1) {
      newIndex = arrayImages.length - 1;
    }
  } else if (e.key === 'ArrowRight') {
    newIndex = currentId + 1;
    if (newIndex === arrayImages.length) {
      newIndex = 0;
    }
  }
  modalContent.src = arrayImages[newIndex];
});
