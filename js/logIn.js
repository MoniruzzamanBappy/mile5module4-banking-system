document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    let userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    let userPassword = passwordField.value;
    // validation and goto another page
    if (userEmail == 'abc@def.com' && userPassword == 'abcdef') {
        window.location.href = 'banking.html';
    }

})