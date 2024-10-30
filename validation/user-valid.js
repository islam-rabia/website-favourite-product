let userInput = document.querySelector(".user input");
let userParagraph = document.querySelector(".user p");

userInput.addEventListener("keyup", () => {
  userValid();
  if (userInput.value == "") {
    userParagraph.style.display = "none";
    userInput.style.border = "1px solid #898989";
  }
});

function userValid() {
  let userRex = /^[a-z]+\s[a-z]+/gi;
  let valueInput = userInput.value;

  localStorage.setItem("userName", JSON.stringify(userInput.value));

  if (valueInput.match(userRex)) {
    userParagraph.style.cssText = `
    display: block;
    color: #00d152
    `;
    userParagraph.innerHTML = "Correct User Name";
    userInput.style.border = "1px solid #00d152";
  } else {
    userParagraph.style.cssText = `
    display: block;
    color: #ed0707
    `;
    userParagraph.innerHTML = "Not Valid User Name";
    userInput.style.border = "1px solid #ed0707";
  }
}

export { userValid };
