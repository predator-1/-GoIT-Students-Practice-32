'use strict';
/**
 * Create Maze game
 * Game starts when mouse croosses green line
 * Game ends when mouse croosses light green field
 * User wins when mouse croosses light red line
 */

const refs = {
  start: document.querySelector('.start'),
  finish: document.querySelector('.finish'),
  indicator: document.querySelector('#indicator'),
  maze: document.querySelector('#maze'),
};

let isPlay = false;

refs.start.addEventListener('mouseover', handleStartMouseOver);
refs.finish.addEventListener('mouseover', handleFinishMouseOver);
refs.maze.addEventListener('mouseover', handleMazeEnter);
refs.maze.addEventListener('mouseleave', handleMazeLeave);

function handleStartMouseOver() {
  refs.indicator.textContent = 'Play';
  isPlay = true;
}

function handleFinishMouseOver() {
  if (isPlay) {
    refs.indicator.textContent = 'Winner';
    isPlay = false;
  }
}

function handleMazeEnter(e) {
  if (isPlay && e.target.classList.contains('block')) {
    isPlay = false;
    refs.indicator.textContent = 'You lose!';
  }
}

function handleMazeLeave(e) {
  if (isPlay) {
    refs.indicator.textContent = 'Pause';
    isPlay = false;
  }
}
