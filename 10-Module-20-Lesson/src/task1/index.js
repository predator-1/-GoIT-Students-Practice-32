'use strict';
/**
 * Create user presentation list
 */

import './styles.css';
import template from './userList.hbs';

const data = {
  title: 'My User List',
  data: {
    users: [
      { name: 'Bobby', age: 15, isAdult: false },
      { name: 'Freddy', age: 25, isAdult: true },
      { name: 'Jonny', age: 60, isAdult: true },
    ],
  },
};

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', template(data));
