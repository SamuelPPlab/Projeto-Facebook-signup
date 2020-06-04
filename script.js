const button1 = document.querySelector('#button-login');

button1.addEventListener('click', function () {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});
document.querySelector('.data').DatePickerX.init({ format: 'dd/mm/yyyy' });
