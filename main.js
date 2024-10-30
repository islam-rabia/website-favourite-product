import { mouseMove } from "./js/mouse-move.js";
import { myFuncData } from "./js/fetch-data.js";
import "./js/navbar-slider.js";
import "./js/scroll-body.js";
import "./js/add-active.js";
import "./js/add-active-onscroll.js";
import "./js/form-validation.js";
import "./js/fetch-data-service.js";

mouseMove();
myFuncData();

function getLocalStorage() {
  let person = document.querySelector(".person");
  let headerProduct = document.querySelector(".header-btn");
  let account = document.querySelector(".header-btn p ");
  let userName = JSON.parse(localStorage.getItem("userName"));

  if (userName) {
    headerProduct.classList.add("active");
    account.innerHTML = `Welcome, ${userName}`;
    person.remove();
  }
}

getLocalStorage();

function signOutAccount() {
  let signOut = document.querySelector(".sign-out");

  signOut.addEventListener("click", () => {
    setTimeout(() => {
      location.href = "signUp.html";
      localStorage.clear();
    }, 1500);
  });
}

signOutAccount();
