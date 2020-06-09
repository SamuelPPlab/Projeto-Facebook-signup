const submitButton = document.getElementById('button-login');

const data = document.getElementById('data');

function alerta() {
  const login = document.getElementById('user-email-phone').value;
  alert(login);
}

submitButton.addEventListener('click', alerta);

new Pikaday({
  field: data,
  format: 'D/MM/YYYY',
});
