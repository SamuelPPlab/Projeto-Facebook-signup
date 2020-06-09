/* global validation */

validation.init();

const submitButton = document.getElementById('button-login');
function alerta() {
  const login = document.getElementById('user-email-phone').value;
  alert(login);
}
submitButton.addEventListener('click', alerta);

new Pikaday({
  field: document.getElementById('data'),
  firstDay: 1,
  format: 'DD/MM/YYYY',
  maxDate: new Date(),
  yearRange: [1920, 2020],
});
