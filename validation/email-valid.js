let emailInput = document.querySelector(".email input");
let emailParagraph = document.querySelector(".email p");

emailInput.addEventListener("keyup", () => {
  emailValid();
  if (emailInput.value == "") {
    emailParagraph.style.display = "none";
    emailInput.style.border = "1px solid #898989";
  }
});

function emailValid() {
  let emailRex = /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/gi;
  let valueInput = emailInput.value;

  localStorage.setItem("email", JSON.stringify(emailInput.value));

  if (valueInput.match(emailRex)) {
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

export { emailValid };
