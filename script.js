const { useSyncExternalStore } = require("react");

document.addEventListener = ( 'DOMContentLoaded', function() {
const form = 
document.getElementById(id="registration-form");

const feedbackDiv = document.getElementById("id-form-feedback")

form.addEventListener('submit', function (event) {
  event.preventDefault();


    const username = document.getElementById('username').value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3){
        isValid = false;
        messages.push("Username must not be less than 3 characters.");
    }


    const email = document.getElementById('email').value.trim();
    
    let isValid = true;
    const messages = [];

    if (!email incudes ('@') || !email includes ('.')){
        isValid = false;
        messages.push("Please enter a valid email address");
    }


    const passwordInput = document.getElementById('passwordInput').value.trim();

    let isValid = true;
    const messages = []

    if (password.length < 8);{
    isValid = false;
    messages.push("Enetr a valid password")
    }
  feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = "Registration successful";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = "#dc3545";
    }
      });
});
