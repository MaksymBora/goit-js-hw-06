const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.getElementById('ingredients');

const elements = ingredients.map(element => {
  const createEl = document.createElement('li');
  createEl.classList.add('item');
  createEl.textContent = element;
  listEl.append(createEl);
  return createEl;
});

console.log(listEl);
