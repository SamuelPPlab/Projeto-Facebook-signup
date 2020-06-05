window.onload = function () {
  document.getElementById('date-picker').addEventListener('click', function () {
    $('#date-picker').datepicker();
    $('#date-picker').datepicker('show');
  });
};
