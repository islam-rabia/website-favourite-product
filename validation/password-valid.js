let passwordInput = document.querySelector(".password input");
let passwordParagraph = document.querySelector(".password p");
let icons = document.querySelector(".password .icons");

passwordInput.addEventListener("keyup", () => {
  passwordValid();
  if (passwordInput.value == "") {
    passwordParagraph.style.display = "none";
    passwordInput.style.border = "1px solid #898989";
    icons.style.top = "57%";
  }
});

function passwordValid() {
  let passwordRex = /^\d{6,}[^a-zA-Z]/gi;
  let valueInput = passwordInput.value;

  localStorage.setItem("password", JSON.stringify(passwordInput.value));

  icons.style.top = "42%";

  if (valueInput.match(passwordRex)) {
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

export { passwordValid };
