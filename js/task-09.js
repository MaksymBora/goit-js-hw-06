function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const output = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColorOnClick);

function changeColorOnClick() {
  const color = getRandomHexColor();
  document.querySelector('body').style.background = color;

  addTextToSpan();
}

function addTextToSpan() {
  output.textContent = getRandomHexColor();
}
