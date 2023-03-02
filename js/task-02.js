const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const elements = ingredients.map(option => {

  const liRef = document.createElement('li')
  liRef.textContent = option;
  liRef.classList.add('item');
  return liRef;
  
});


ingredientsList.append(...elements)
console.log(elements);
console.log(ingredientsList);