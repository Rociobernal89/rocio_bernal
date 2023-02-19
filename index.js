form.addEventListener('submit', e => {
    e.preventDefault();

    const validForm = validateInputs();
    if(validForm){
        alert("Se ha inscrito correctamente")
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const pattern = new RegExp('^[A-Z]+$', 'i');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let validForm = true; 

    if(usernameValue === '') {
        setError(username, 'Rellene este campo');
        validForm = false;

    } else if(!pattern.test(usernameValue)) {
        setError(username, 'solo letras')

        validForm = false;

    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Rellene este campo');
        validForm = false;

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email invalido');
        validForm = false;

    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Rellene este campo');
        validForm = false;

    } else if (passwordValue.length > 8 ) {
        setError(password, 'No debe tener mas de 8 caracteres')

        validForm = false;    
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Rellene este campo');
        validForm = false;

    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
        validForm = false;

    } else {
        setSuccess(password2);
    }


    return validForm;

};
