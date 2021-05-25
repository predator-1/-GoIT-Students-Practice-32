/**
 * Paint block when mouse on button
 */

const mouseOverListener = event => {
  if (event.target.classList.contains('card__delete')) {
    event.currentTarget.classList.add('card_focus');
  }
};

const mouseOutListener = event => {
  if (event.target.classList.contains('card__delete')) {
    event.currentTarget.classList.remove('card_focus');
  }
};

const cardRef = document.querySelector('.card');

cardRef.addEventListener('mouseover', mouseOverListener);
cardRef.addEventListener('mouseout', mouseOutListener);
