document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateRegistrationForm();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLoginForm();
        });
    }
});

function validateRegistrationForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return false;
    }

    if (!validateMobileNumber(mobileNumber)) {
        alert('Invalid mobile number');
        return false;
    }

    alert('Registration successful');
    return true;
}

function validateLoginForm() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    alert('Login successful');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateMobileNumber(mobileNumber) {
    const re = /^\d{10}$/; // Adjust this regex based on your mobile number format requirements
    return re.test(mobileNumber);
}