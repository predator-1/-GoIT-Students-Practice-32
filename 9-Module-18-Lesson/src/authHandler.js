import { isUserValid } from './database';
import $ from 'jquery';

export default function () {
  document.forms.AuthForm.addEventListener('submit', e => {
    e.preventDefault();
    submit(e.target);
  });
}

const submit = form => {
  const email = form.querySelector('input[name=email]');
  const password = form.querySelector('input[name=password]');

  if (isUserValid(email.value, password.value)) {
    email.value = '';
    password.value = '';
  }
};
