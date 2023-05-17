// style = 'font-size: 20px';

const inputControl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

inputControl.addEventListener('input', onInputControl);

function onInputControl(event) {
  const inputValue = event.target.value;
  outputText.style.fontSize = `${inputValue}px`;
}
