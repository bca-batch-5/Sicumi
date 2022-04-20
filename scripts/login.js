"use strict";
/////////////////////////////
// Inisialisasi Object dummy
const account = {
  name: "Sicumi Cumi",
  email: "sicumi@bca.com",
  password: "sicumi",
};

/////////////////////////////
// Back to Landing Page
const heroTitle = document.querySelector(".hero__title");

heroTitle.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/";
});

/////////////////////////////
// Change Color Focus
const form = document.querySelector(".form");
const icons = document.querySelectorAll(".input__icon");
const input = document.querySelectorAll(".input");

// const change = () => {
//   form.style.opacity = "1";
//   icons.forEach((el) => {
//     el.style.stroke = "#7950f2";
//   });
//   input.forEach((el) => {
//     el.style.borderBottom = "1px solid #7950f2";
//   });
// };

// const back = () => {
//   form.style.opacity = "0.4";
//   icons.forEach((el) => {
//     el.style.stroke = "rgba(0, 0, 0, 0.5)";
//   });
//   input.forEach((el) => {
//     el.style.borderBottom = "1px solid rgba(0, 0, 0, 0.5)";
//   });
// };
const changeColor = (opacity, color) => {
  form.style.opacity = `${opacity}`;
  icons.forEach((el) => {
    el.style.stroke = `${color}`;
  });
  input.forEach((el) => {
    el.style.borderBottom = `1px solid ${color}`;
  });
};

const emailBox = document.querySelector(".input__email");
const passBox = document.querySelector(".input__pass");

emailBox.addEventListener("focus", () => changeColor("1", "#7950f2"));
passBox.addEventListener("focus", () => changeColor("1", "#7950f2"));
emailBox.addEventListener("blur", () =>
  changeColor("0.4", "rgba(0, 0, 0, 0.5)")
);
passBox.addEventListener("blur", () =>
  changeColor("0.4", "rgba(0, 0, 0, 0.5)")
);

const nameBox = document.querySelector(".input__name");
nameBox.addEventListener("focus", () => changeColor("1", "#7950f2"));
nameBox.addEventListener("blur", () =>
  changeColor("0.4", "rgba(0, 0, 0, 0.5)")
);

/////////////////////////////
// Pass visible
const visIcon = document.querySelectorAll(".pass_visible");
visIcon.forEach((el) => {
  el.addEventListener("mousedown", () => {
    visIcon.forEach((el) => {
      el.classList.toggle("hidden");
    });
    if (passBox.type === "password") {
      passBox.type = "text";
    } else {
      passBox.type = "password";
    }
  });
});

/////////////////////////////
// Change Alert Login
const btnLogin = document.querySelector(".btn__login");
const btnSignup = document.querySelector(".btn__signup");
const alert = document.querySelector(".alert");

const changeAlert = (message, color) => {
  changeColor("1", `${color}`);
  alert.style.visibility = "visible";
  alert.textContent = `${message}`;
  alert.style.color = `${color}`;
  emailBox.value = passBox.value = nameBox.value = "";
  setTimeout(() => {
    alert.style.visibility = "hidden";
  }, 5000);
};

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailBox.value;
  const pass = passBox.value;

  if (email === account.email && pass === account.password) {
    changeAlert("Login Succeed", "#12b886");
  } else {
    changeAlert("Email or Password Invalid", "#fa5252");
  }
});

/////////////////////////////
// Signup and Login Switching
const toSignup = document.querySelector(".to__signup");
const toLogin = document.querySelector(".to__login");
const cta = document.querySelectorAll(".cta");
const resetPass = document.querySelector(".reset__pass");

const switchMenu = () => {
  emailBox.value = passBox.value = nameBox.value = "";
  form.firstElementChild.classList.toggle("hidden");
  btnLogin.classList.toggle("hidden");
  btnSignup.classList.toggle("hidden");
  cta.forEach((el) => {
    el.classList.toggle("hidden");
  });
  resetPass.classList.toggle("hidden");
  alert.classList.toggle("hidden");
};

toSignup.addEventListener("click", switchMenu);
toLogin.addEventListener("click", switchMenu);

/////////////////////////////
// Signup Button

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./pin.html";
});

/////////////////////////////
// Reset Password Button
resetPass.addEventListener("click", () => {
  window.location.href = "./reset.html";
});
