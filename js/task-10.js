function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  create: document.querySelector('#controls [data-create]'),
  remove: document.querySelector('#controls [data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.input.addEventListener('change', onChangeValue);
let amount = 0;

function onChangeValue(event) {
  amount = event.target.value;
  // console.log('Total Boxes: ', amount);
}

refs.create.addEventListener('click', createBoxes);
refs.remove.addEventListener('click', destroyBoxes);

function createBoxes() {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const createEl = document.createElement('div');
    width += 10;
    height += 10;
    createEl.classList.add('box-item');
    createEl.style.background = getRandomHexColor();
    createEl.style.width = `${width}px`;
    createEl.style.height = `${height}px`;

    refs.box.append(createEl);
  }
}

function destroyBoxes() {
  console.log('remove');
  const findBoxes = document.querySelectorAll('.box-item');
  findBoxes.forEach(box => {
    box.remove();
  });
}
