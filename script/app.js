function handleFloatingLabel() {
   
}

const handlePasswordSwitcher = function () {
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToggle = document.querySelector('.js-password-toggle');
    
    // Simpele zelfcontrole
    if(!passwordInput || !passwordToggle){
        console.error('The classes were not loaded', passwordInput, passwordToggle);
        return;
    }
    //We gaan luisteren of er geklikt wordt op de checkbox.
    //Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa.
    passwordToggle.addEventListener('change', function(){
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text';
        } else{
            passwordInput.type = 'password';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});
