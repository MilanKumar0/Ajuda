// for hiding and unhiding the both login an registration form************************************************************
// Get the registration form button and container
var registrationButton = document.getElementById("registration-button");
var registrationFormContainer = document.getElementById("registration-form-container");

// Get the login form button and container
var loginButton = document.getElementById("login-button");
var loginFormContainer = document.getElementById("login-form-container");

// Add a click event listener to the registration form button
registrationButton.addEventListener("click", function () {
  // Show the registration form container and hide the login form container
  registrationFormContainer.removeAttribute("hidden");
  loginFormContainer.setAttribute("hidden", "");
});

// Add a click event listener to the login form button
loginButton.addEventListener("click", function () {
  // Show the login form container and hide the registration form container
  loginFormContainer.removeAttribute("hidden");
  registrationFormContainer.setAttribute("hidden", "");
});

// Add click event listeners to the registration and login buttons to toggle their respective forms
registrationButton.addEventListener("click", toggleRegistrationForm);
loginButton.addEventListener("click", toggleLoginForm);

function toggleRegistrationForm() {
  // Toggle the registration form container visibility
  if (registrationFormContainer.hasAttribute("hidden")) {
    registrationFormContainer.removeAttribute("hidden");
  } else {
    registrationFormContainer.setAttribute("hidden", "");
  }
  
  // Hide the login form container
  loginFormContainer.setAttribute("hidden", "");
}

function toggleLoginForm() {
  // Toggle the login form container visibility
  if (loginFormContainer.hasAttribute("hidden")) {
    loginFormContainer.removeAttribute("hidden");
  } else {
    loginFormContainer.setAttribute("hidden", "");
  }
  
  // Hide the registration form container
  registrationFormContainer.setAttribute("hidden", "");
}
// form validation*********************************************************************************************************************
function validateForm() {
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm-password").value;

  // Validate all fields are non-empty
  if (name == "" || gender == "" || phone == "" || email == "" || password == "" || confirm_password == "") {
    alert("All fields are required");
    return false;
  }

  // Validate phone number format
  var phone_regex = /^[0-9]{10}$/;
  if (!phone_regex.test(phone)) {
    alert("Invalid phone number");
    return false;
  }

  // Validate email format
  var email_regex = /^\S+@\S+\.\S+$/;
  if (!email_regex.test(email)) {
    alert("Invalid email");
    return false;
  }

  // Validate password format
  var password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!password_regex.test(password)) {
    alert("Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number");
    return false;
  }

  // Validate password and confirm password match
  if (password != confirm_password) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}