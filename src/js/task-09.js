function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  colorName: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color')
};

refs.changeColorBtn.addEventListener('click', (event) => {
 document.body.style.backgroundColor = getRandomHexColor();

 refs.colorName.textContent = getRandomHexColor();




});





