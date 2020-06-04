const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
});

const birthDate = document.getElementById('birthdate');

birthDate.DatePickerX.init({ format:'dd/mm/yyyy' });

validation.init('#username-email-phone');