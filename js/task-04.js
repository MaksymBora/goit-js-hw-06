let counterValue = 0;
let abc = document.querySelector('#value');

const actions = document.querySelectorAll('#counter button');
// console.log(actions[0].dataset.action);

const increas = () => {
  counterValue += 1;
  return (abc.textContent = counterValue);
};

const decrease = () => {
  counterValue -= 1;
  return (abc.textContent = counterValue);
};

const incBtn = actions[1];
const decBtn = actions[0];

incBtn.addEventListener('click', increas);
decBtn.addEventListener('click', decrease);
