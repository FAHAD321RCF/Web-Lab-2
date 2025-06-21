const form = document.getElementById('biodataForm');
const inputs = form.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const statusIcon = input.nextElementSibling;
    if (input.checkValidity()) {
      input.style.borderColor = 'green';
      statusIcon.textContent = '✔';
      statusIcon.style.color = 'green';
    } else {
      input.style.borderColor = 'red';
      statusIcon.textContent = '✖';
      statusIcon.style.color = 'red';
    }
  });
});