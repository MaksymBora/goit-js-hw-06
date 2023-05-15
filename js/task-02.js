const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.getElementById('ingredients');

const elements = ingredients.map(element => {
  const createItemEl = document.createElement('li');
  createItemEl.classList.add('item');
  createItemEl.textContent = element;
  listEl.append(createItemEl);
  return createItemEl;
});
