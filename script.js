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
