// Variáveis
const loginButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');

// Funções
function alertaLogin() {
  alert(emailInput.value);
}

// Event Listeners
loginButton.addEventListener('click', alertaLogin);
