const submitButton = document.getElementById('button-login');

const data = document.getElementById('data');

function alerta() {
  const login = document.getElementById('user-email-phone').value;
  alert(login);
}

submitButton.addEventListener('click', alerta);

/* global Pikaday:true */
/* eslint no-undef: "error" */
const picker = new Pikaday({
  field: data,
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});
