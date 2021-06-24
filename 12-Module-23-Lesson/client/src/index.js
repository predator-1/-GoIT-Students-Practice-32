// import './styles.scss';
import {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
  getNote,
} from './request.service';
import $ from 'jquery';

const input = $('.input');

const render = notes => {
  $('.todo-list').empty();
  for (const note of notes) {
    const template = `<li>${note.text}</li>`;
    $('.todo-list').append($(template));
  }
};

getNotes().then(render);

$('.input-form').on('submit', e => {
  e.preventDefault();
  const text = input.val();
  if (text) {
    addNote({ text }).then(() => input.val(''));
  }
  getNotes().then(render);
});


fetch('api/some_url', { method: 'GET'}).then(r => {
  if(r.ok) {
    console.log('ok');
  } else {
    console.log('not ok');
  }
}).catch(() => console.log('exception'));