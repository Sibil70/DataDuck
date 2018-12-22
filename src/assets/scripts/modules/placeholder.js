var emailInput = document.querySelector('.js-email-input');

emailInput.addEventListener('blur', function(){
    console.log ('salut!')
    if(emailInput.value.length > 0 ){
        emailInput.classList.add('form__input-area--up')
    } else {
        emailInput.classList.remove('form__input-area--up')
    }
});

var passwordInput = document.querySelector('.js-password-input');

passwordInput.addEventListener('blur', function(){
    console.log ('salut!')
    if(passwordInput.value.length > 0 ){
        passwordInput.classList.add('form__input-area--up')
    } else {
        passwordInput.classList.remove('form__input-area--up')
    }
});