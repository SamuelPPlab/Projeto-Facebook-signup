let submitButton = document.getElementById("button-login");


submitButton.addEventListener("click", alerta);

function alerta(){
  let login = document.getElementById("user-email-phone").value;
  alert("" + login);
};
