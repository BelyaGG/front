import {isUserRegistered} from './utils/isUserRegistered.js'

const div = document.getElementsByClassName('myclass');

export const addFormSubmitEvent = () => {
    const form = document.forms[0];
    form.addEventListener("submit", function(e){
        console.log(form)
        e.preventDefault()
        const [inputEmail, inputPassword, checkbox] = form.elements;


        if (isUserRegistered()){
            const registeredEmail = localStorage.getItem('email');
            const registeredPassword = localStorage.getItem('password');
            if ( 
                registeredEmail === inputEmail.value && 
                registeredPassword === inputPassword.value
            ) {
                console.log ("Успешно вошли");
            } else {
                console.log('Неверный пароль или логин')
            }



        }else {
            localStorage.setItem("email", inputEmail.value);
            localStorage.setItem("password", inputPassword.value);
            if (checkbox.checked){
                localStorage.setItem("isValidationRequired", false);
            }
            console.log ( 'ПОЗДРАВЛЯЕМ! ВЫ УСПЕШНО ЗАРЕГИСТРИРОВАНЫ В СИСТЕМЕ!') ;
        }
    });
};