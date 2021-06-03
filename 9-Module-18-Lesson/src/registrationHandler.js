import { saveUser } from './database';
import $ from 'jquery';

export default function () {
  const regForm = document.forms.RegForm;
  regForm.addEventListener('submit', e => {
    e.preventDefault();
    submit(e.target);
  });
}

const submit = form => {
  const email = form.querySelector('input[name=email]');
  const password = form.querySelector('input[name=password]');
  const passwordCheck = form.querySelector('input[name=password-check]');
  const agree = form.querySelector('input[name=agree]');

  console.log(email.value, password.value, passwordCheck.value, agree.checked);

  if (email.value && password.value === passwordCheck.value && agree.checked) {
    saveUser(email.value, password.value);
    document.getElementById('toast-user').textContent = email.value;
    email.value = '';
    password.value = '';
    passwordCheck.value = '';
    agree.checked = false;
    $('.toast').toast('show');
  }
};

$('.toast').toast({
  delay: 5000,
});
