const ref = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value'),
}


ref.decrement.addEventListener('click',() => {
    ref.span.textContent -= 1;
} );

ref.increment.addEventListener('click', () => {
    let value = parseInt(ref.span.textContent);

    ref.span.textContent = value + 1;
});
