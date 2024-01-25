const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const createBTN = document.getElementById('createBTN');
const passwordError = document.getElementById('passwordError');

function checkPassword() {
    if (password.value === confirmPassword.value) {
        passwordError.style.display = "none";
        return true;
    } else {
        passwordError.style.display = "block";
    }
}

createBTN.addEventListener('click', () => {
    checkPassword();
});

checkPassword();