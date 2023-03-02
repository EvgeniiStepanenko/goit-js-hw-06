const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener('blur',validationInput);

function validationInput (){
    inputEL.classList.toggle("valid", inputEL.value.length >= 6 );
inputEL.classList.toggle("invalid", inputEL.value.length < 6 )
}




