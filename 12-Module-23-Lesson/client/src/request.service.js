import $ from 'jquery';

export const getNotes = () => {
  return new Promise((res, rej) => {
    $.get('api/notes', data => {
      res(data);
    }).fail(resp => rej(resp));
  });
};

export const getNote = ({ id }) => {
  return new Promise((res, rej) => {
    $.get('api/notes/' + id, data => {
      res(data);
    }).fail(resp => rej(resp));
  });
};

export const addNote = ({ text }) => {
  return new Promise((res, rej) => {
    $.post('api/notes', { text }, data => {
      res(data);
    }).fail(resp => rej(resp));
  });
};

export const updateNote = ({ text, id }) => {
  return new Promise((res, rej) => {
    $.ajax({
      dataType: 'json',
      url: 'api/notes/' + id,
      data: { text },
      method: 'PUT',
      success: data => res(data),
      error: resp => rej(resp),
    });
  });
};

export const deleteNote = ({ text, id }) => {
  return new Promise((res, rej) => {
    $.ajax({
      // dataType: 'json',
      url: 'api/notes/' + id,
      method: 'DELETE',
      success: data => res(data),
      error: resp => rej(resp),
    });
  });
};
