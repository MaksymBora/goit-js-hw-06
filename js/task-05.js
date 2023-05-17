const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const defeult = 'Anonymous';

  const inputValue = event.target.value;

  if (inputValue === '') {
    refs.output.textContent = defeult;
  } else {
    refs.output.textContent = inputValue;
  }
}
