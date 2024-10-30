let passwordInput = document.querySelector(".password input");
let iconShow = document.querySelectorAll(".password .icons ion-icon")[0];
let iconHidden = document.querySelectorAll(".password .icons ion-icon")[1];

iconShow.addEventListener("click", () => {
  passwordInput.setAttribute("type", "text");
  iconShow.classList.add("hidden");
  iconHidden.classList.add("show");
});

iconHidden.addEventListener("click", () => {
  passwordInput.setAttribute("type", "password");
  iconHidden.classList.remove("show");
  iconShow.classList.remove("hidden");
});
