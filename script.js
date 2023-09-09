const showPasswdBtn = document.querySelectorAll('.show-passwd-btn');

showPasswdBtn.forEach((btn) => {
    let isVisible = false;
    btn.addEventListener('click', (e) => {
        let passwdEle = e.target.parentElement.querySelector('input');
        if(!isVisible){
            passwdEle.setAttribute('type', 'text');
            e.target.classList.remove("fa-eye-slash");
            e.target.classList.remove("fa-solid");
            e.target.classList.add("fa-regular");
            e.target.classList.add("fa-eye");
        }else{
            passwdEle.setAttribute('type', 'password');
            e.target.classList.add("fa-eye-slash");
            e.target.classList.add("fa-solid");
            e.target.classList.remove("fa-regular");
            e.target.classList.remove("fa-eye");
        }

        isVisible = !isVisible;
    });
})

const validatePhoneNumber = (e) => {
    let phoneString = "0123456789";
    let errorMsg = "";
    
    if(phoneNumInput.value.length <= 10){
        errorMsg = errorMsgsObj.phoneNumErrors.phoneLenError;
        showErrorMsg(errorMsg);
        isPasswd = false;
    }else if(phoneNumInput.value !== undefined && 
        !phoneString.includes(phoneNumInput.value[phoneNumInput.value.length - 1]) && !isPasswd){
        errorMsg = errorMsgsObj.phoneNumErrors.phoneNumericError;
        showErrorMsg(errorMsg);
        isPasswd = false;
    }else{
        showErrorMsg("");
        isPasswd = true;
    }

    console.log(isPasswd)
}

phoneNumInput.addEventListener('input', validatePhoneNumber);

const validatePhoneNumber = (e) => {
    const phoneNumInput = e.target; // Get the input element
    const phoneString = "0123456789";
    const errorMsgsObj = {
        phoneNumError: ["", ""] // Initialize with two empty strings
    };

    if (phoneNumInput.value.length !== 10) {
        errorMsgsObj.phoneNumError[0] = "Please enter a phone number with exactly ten numerals!!!";
    } else {
        errorMsgsObj.phoneNumError[0] = "";
    }

    if (phoneNumInput.value !== undefined && !/^[0-9]+$/.test(phoneNumInput.value)) {
        errorMsgsObj.phoneNumError[1] = "Phone number must be numeric only";
    } else {
        errorMsgsObj.phoneNumError[1] = "";
    }

    console.log(errorMsgsObj);
}

const validatePassword = () => {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let errorMsg = "";
    if(passwd.value !== ConfirmPasswd.value){
        errorMsg = errorMsgsObj.passwdErros.mismatchError;
        
        if(alphabets.substring(passwd.value) )
    }

}

let errorMsgsObj = {
    phoneNumErrors: {
        phoneLenError: "Please enter phone number of valid length i.e of ten numerals!!!",
        phoneNumericError: "Phone number must be numeric only"
    },
    passwdErros: {
        mismatchError: "Password does not match with confirm password",
        alphabetError: "Password must atleast contain one alphabet",
        passwdLenError: "Password length must be atleast 8 characters long",
        specialCharError: "Password must contain atleast one special character",
        upperCaseAlphabetError: "Password must contain atlease one uppercase alphabet"
    }
}

// Assuming you have an input element with id 'phoneNumInput'
const phoneNumInput = document.getElementById('phoneNumInput');
phoneNumInput.addEventListener('input', validatePhoneNumber);

