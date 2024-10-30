import { userValid } from "./user-valid.js";
import { emailValid } from "./email-valid.js";
import { passwordValid } from "./password-valid.js";
import "./show-password.js";

let userInput = document.querySelector(".user input");
let emailInput = document.querySelector(".email input");
let passwordInput = document.querySelector(".password input");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  userValid();
  emailValid();
  passwordValid();

  let userRex = /^[a-z]+\s[a-z]+/gi;
  let emailRex = /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/gi;
  let passwordRex = /^\d{6,}[^a-zA-Z]/gi;

  if (
    (userInput.value.match(userRex) && userInput.value !== "") ||
    (emailInput.value.match(emailRex) && emailInput.value !== "") ||
    (passwordInput.value.match(passwordRex) && passwordInput.value !== "")
  ) {
    setTimeout(() => {
      location.href = "signIn.html";
    }, 1500);
  }
});
