// Selecting elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitButton");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Validation functions
function validateUsername() {
    const value = username.value;
    if (value.length < 3 || value.length > 15) {
        usernameError.textContent = "Username must be between 3 and 15 characters.";
        return false;
    } else {
        usernameError.textContent = "✓";
        return true;
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email.";
        return false;
    } else {
        emailError.textContent = "✓";
        return true;
    }
}

function validatePassword() {
    const value = password.value;
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[@$!%*?&]/.test(value);

    if (value.length < 8 || !hasUpper || !hasLower || !hasNumber || !hasSpecial) {
        passwordError.textContent = "Password must be 8 characters with upper, lower, number, and special character.";
        return false;
    } else {
        passwordError.textContent = "✓";
        return true;
    }
}

function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "✓";
        return true;
    }
}

function checkFormValidity() {
    if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Event listeners for real-time validation
username.addEventListener("input", () => {
    validateUsername();
    checkFormValidity();
});

email.addEventListener("input", () => {
    validateEmail();
    checkFormValidity();
});

password.addEventListener("input", () => {
    validatePassword();
    checkFormValidity();
});

confirmPassword.addEventListener("input", () => {
    validateConfirmPassword();
    checkFormValidity();
});
