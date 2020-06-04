// Variáveis
const loginButton = document.getElementById('button-login');
let emailInput = document.getElementById('user-email-phone')

// Funções
function alertaLogin() {
  alert(emailInput.value);
}

// Event Listeners
loginButton.addEventListener('click', alertaLogin);