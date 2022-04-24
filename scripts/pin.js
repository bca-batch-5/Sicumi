"use strict";
/////////////////////////////
// Change Color Focus
const form = document.querySelector(".form");
const input = document.querySelectorAll(".input__pin");
const pinBox = document.querySelectorAll(".input__pin-box");

const changeColor = (opacity, color) => {
  form.style.opacity = `${opacity}`;
  pinBox.forEach((el) => {
    el.style.border = `2px solid ${color}`;
  });
};

pinBox.forEach((el) => {
  el.addEventListener("focus", () => changeColor("1", "#7950f2"));
  el.addEventListener("blur", () => changeColor("0.4", "rgba(0, 0, 0, 0.5)"));
});

/////////////////////////////
// Confirm Button
const btnConfirm = document.querySelector(".btn__confirm");
const intTitle = document.querySelector(".intro__title");
const intSub = document.querySelector(".intro__sub");
const imgSuc = document.querySelector(".icon__success");

const pinSuccess = (e) => {
  e.preventDefault();
  imgSuc.classList.remove("hidden");
  form.classList.add("hidden");
  intTitle.textContent = "Your PIN was Successfully Created";
  intSub.textContent =
    "Your PIN was successfully created and you can now access all the features in Sicumi. Login to your new account and start exploring, you'll moving to login page in 5 seconds!";

  setTimeout(() => {
    window.location.href = "./login.html";
  }, 5000);
};

btnConfirm.addEventListener("click", pinSuccess);
