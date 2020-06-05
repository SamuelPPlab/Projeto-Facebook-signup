const botao = document.querySelector('.button-login');
const email = document.querySelector('#user-email-phone');
const cadastro = document.querySelector('#facebook-register');
const lista = document.querySelectorAll('.lista');
const genero = document.getElementsByName('Gênero');

botao.addEventListener('click', function () {
  alert(email.value);
});

cadastro.addEventListener('click', function () {
  let quantidade = 0;
  let generoSelect = '';
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].value !== '') {
      quantidade += 1;
    }
  }
  for (let j = 0; j < genero.length; j += 1) {
    if (genero[j].checked) {
      generoSelect = genero[j].value;
      quantidade += 1;
    }
  }
  if (quantidade < 6) {
    alert('Dados inválidos');
  } else {
    alert(lista[0].value, ' - ', generoSelect);
  }
});
