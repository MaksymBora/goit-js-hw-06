const input = document.querySelector('#validation-input');

input.addEventListener('blur', inInputBlur);

// function onInputFocus() {

// }

function inInputBlur(event) {
  const inputValue = event.target.value;

  if (inputValue.length >= 6) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
  }
  console.log(inputValue.length);
}
