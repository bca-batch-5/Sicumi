const passBox = document.querySelectorAll("input");
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
