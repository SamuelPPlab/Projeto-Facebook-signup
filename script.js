const login = document.getElementById('button-login');

login.addEventListener('click', function () {
  const enviarEmail = document.getElementById('user-email-phone').value;
  if (enviarEmail !== 'undefined') {
    alert(enviarEmail);
  }
});
