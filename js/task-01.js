const categoriesEL = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach(el => {
    const categoryTitle = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;
    
    console.log(
    `Category : ${categoryTitle}
    Elements : ${elements}`)
});


