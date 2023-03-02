const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit',(event) => {
    event.preventDefault();
    const {
        elements :{ email, password},
    } = event.currentTarget;
    const inputValue = {
        email,
        password,
    };
    // console.log(inputValue);

    if(inputValue.email.value == '' || inputValue.password.value == '')
    window.alert ('Всі поля мають бути заповнені!')

   event.target.reset();

});




