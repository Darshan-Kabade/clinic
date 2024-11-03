function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 6 characters';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
        isValid = false;
    }

    return isValid; // Prevent form submission if validation fails
}
