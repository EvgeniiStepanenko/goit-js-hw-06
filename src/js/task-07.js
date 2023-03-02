const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}


refs.input.addEventListener('input', (event) => {
    const changeSize = event.target.value;
    text.style.fontSize = `${changeSize}px`
});




