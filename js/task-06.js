const input = document.querySelector('#validation-input');

input.addEventListener('blur', inInputBlur);

function inInputBlur(event) {
  const inputValue = event.target.value;
  const requiredLength = input.dataset.length;

  if (inputValue.length === Number(requiredLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
