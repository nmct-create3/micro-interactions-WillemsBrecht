let email = {}, 
    password = {}, 
    signInButton;

const isValidEmailAddress = function(emailAddress) {
   // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password){
    let passwordLength = password.length;
    console.log(passwordLength > 1);
    return passwordLength >= 2;
}

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const addErrors = function(formfield, errorMessage, errorField){
    formfield.classList.add("c-error");
    errorField.innerHTML = errorMessage;
}

const removeErrors = function(formField, errorField) {
    formField.classList.remove("c-error");
    errorField.innerHTML = "";
}

const doubleCheckEmailAddress = function(){
    if (!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)){
        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress);
    } else {
        addErrors(email.field, "The e-mail is incorrect", email.errorMessage);
    }
}

const doubleCheckPassword = function() {
    if(!isEmpty(password.input.value) && isValidPassword(password.input.value)){
        removeErrors(password.field, password.errorMessage);
        password.input.addEventListener("input", doubleCheckPassword );
    } else{
        addErrors(password.input, "The password is not good", password.errorMessage);
    }
}

const getDOMElements = function () {
    email.errorMessage = document.querySelector(".js-email-error");
    email.input = document.querySelector(".js-email-input");
    email.field = document.querySelector(".js-email-field");
    password.errorMessage = document.querySelector(".js-password-error");
    password.input = document.querySelector(".js-password-input");
    password.field = document.querySelector(".js-password-field");
    signInButton = document.querySelector(".js-sign-in-button");
    enableListeners();
};

const enableListeners = function () {
    email.input.addEventListener("blur", function () {
        if(isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)){
            addErrors(email.field, "This field is required", email.errorMessage);
            
            // ZET GEEN RODNE HAAKJES NA EEN NAMED (EVEN) FUNTION
            // DOE JE DIT TOCH ZAL DEZE FUNTIE MAAR 1 KEER UITGEVOERD WORDEN TIJDENS HET PARSEN
            // ZONDER HAAKJES ZAL DIT ALTIJD GEBREUREN NA HET TYPEN!!!
            email.input.addEventListener('input', doubleCheckEmailAddress);
        }else{
            if(isEmpty(email.input.value)){
                removeErrors(email.field, email.errorMessage);
                email.input.removeEventListener('input', doubleCheckEmailAddress);
            }
        }
    });

    password.input.addEventListener("blur", function() {
        if(isEmpty(password.input.value) && !isValidPassword(password.input.value)){
            addErrors(password.field, "This field is required", password.errorMessage);
            password.input.addEventListener("input", doubleCheckPassword);
        }else{
            if(isEmpty(password.input.value)){
                removeErrors(password.field, password.errorMessage);
                password.input.removeEventListener("input", doubleCheckPassword);
            }
        }
    });
};

const handleFloatingLabel = function (){
    let emailLabel = document.querySelector(".js-email-label");
    let emailInput = document.querySelector(".js-email-input");
    emailInput.addEventListener('blur', function() {
        if(isEmpty(emailInput.value)){
            emailLabel.classList.remove("isFloating");
        } else{
            emailLabel.classList.add("isFloating");
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script + Dloaded!');
    getDOMElements();
    handleFloatingLabel();
});