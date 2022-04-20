/////////////////////////////
// Change Color Focus
const form = document.querySelector(".form");
const icons = document.querySelectorAll(".input__icon");
const input = document.querySelectorAll(".input");

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
const passBox = document.querySelectorAll(".input__pass");

emailBox.addEventListener("focus", () => changeColor("1", "#7950f2"));
emailBox.addEventListener("blur", () =>
  changeColor("0.4", "rgba(0, 0, 0, 0.5)")
);
passBox.forEach((el) => {
  el.addEventListener("focus", () => changeColor("1", "#7950f2"));
  el.addEventListener("blur", () => changeColor("0.4", "rgba(0, 0, 0, 0.5)"));
});

/////////////////////////////
// Pass visible
const visIcon = document.querySelectorAll(".pass_visible");
visIcon.forEach((el) => {
  el.addEventListener("mousedown", () => {
    visIcon.forEach((el) => {
      el.classList.toggle("hidden");
    });
    passBox.forEach((el) => {
      if (el.type === "password") {
        el.type = "text";
      } else {
        el.type = "password";
      }
    });
  });
});

/////////////////////////////
// Reset Button
const btnReset = document.querySelector(".btn__reset");
const btnResetpass = document.querySelector(".btn__reset-pass");
const alert = document.querySelector(".alert");

btnReset.addEventListener("click", (e) => {
  e.preventDefault();

  if (emailBox.value === "sicumi@bca.com") {
    input.forEach((el) => {
      el.classList.toggle("hidden");
      btnReset.classList.add("hidden");
      btnResetpass.classList.remove("hidden");
    });
  } else {
    emailBox.value = "";
    alert.style.visibility = "visible";
    alert.textContent = "Email Can't be Found";
    alert.style.color = `#fa5252`;
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 3000);
  }
});

btnResetpass.addEventListener("click", (e) => {
  e.preventDefault();
  const password = [];
  passBox.forEach((el) => {
    password.push(el.value);
  });
  const [pass1, pass2] = password;
  if (pass1 !== pass2) {
    passBox.forEach((el) => {
      el.value = "";
    });
    alert.style.visibility = "visible";
    alert.style.color = `#fa5252`;
    alert.textContent = "Passwords not match!";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 3000);
  } else {
    passBox.forEach((el) => {
      el.value = "";
    });
    alert.style.visibility = "visible";
    alert.style.color = `#12b886`;
    alert.textContent = "Reset Password Success!";
    setTimeout(() => {
      alert.style.visibility = "hidden";
      window.location.href = "./login.html";
    }, 3000);
  }
});
