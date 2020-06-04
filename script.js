const botao = document.getElementById('button-login');
const recebeEmail = document.getElementById('user-email-phone');

botao.addEventListener('click', function () {
  alert(recebeEmail.value);
});
