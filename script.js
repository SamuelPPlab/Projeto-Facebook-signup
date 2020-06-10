const loginButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');

function alertaLogin() {
  alert(emailInput.value);
}

loginButton.addEventListener('click', alertaLogin);
