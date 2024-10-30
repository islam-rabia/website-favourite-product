let emailInput = document.querySelector(".email input");
let passwordInput = document.querySelector(".password input");

let emailParagraph = document.querySelector(".email p");
let passwordParagraph = document.querySelector(".password p");

let getEmail = JSON.parse(localStorage.getItem("email"));
let getPassword = JSON.parse(localStorage.getItem("password"));

emailInput.addEventListener("keyup", () => {
  LogInValid();
  if (emailInput.value == "") {
    emailParagraph.style.display = "none";
    emailInput.style.border = "1px solid #898989";
  }
});

passwordInput.addEventListener("keyup", () => {
  LogInPassValid();
  if (passwordInput.value == "") {
    passwordParagraph.style.display = "none";
    passwordInput.style.border = "1px solid #898989";
  }
});

function LogInValid() {
  let getEmail = JSON.parse(localStorage.getItem("email"));
  let valueInput = emailInput.value;

  if (valueInput === getEmail) {
    emailParagraph.style.cssText = `
    display: block;
    color: #00d152
    `;
    emailParagraph.innerHTML = "Correct Email";
    emailInput.style.border = "1px solid #00d152";
  } else {
    emailParagraph.style.cssText = `
    display: block;
    color: #ed0707
    `;
    emailParagraph.innerHTML = "Not Valid Email";
    emailInput.style.border = "1px solid #ed0707";
  }
}

function LogInPassValid() {
  let getPassword = JSON.parse(localStorage.getItem("password"));
  let valueInput = passwordInput.value;

  if (valueInput === getPassword) {
    passwordParagraph.style.cssText = `
    display: block;
    color: #00d152
    `;
    passwordParagraph.innerHTML = "Correct Password";
    passwordInput.style.border = "1px solid #00d152";
  } else {
    passwordParagraph.style.cssText = `
    display: block;
    color: #ed0707
    `;
    passwordParagraph.innerHTML = "Not Valid Password";
    passwordInput.style.border = "1px solid #ed0707";
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  LogInPassValid();
  LogInValid();

  let getEmail = JSON.parse(localStorage.getItem("email"));
  let getPassword = JSON.parse(localStorage.getItem("password"));

  if (
    (emailInput.value === getEmail && emailInput.value !== "") ||
    (passwordInput.value === getPassword && passwordInput.value !== "")
  ) {
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
  }
});
