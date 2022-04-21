const inputs = document.querySelectorAll("input");
const codeBlock = document.getElementById("code-block");
const code = document.getElementById("code");
const form = document.querySelector("form");

inputs.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode = [...inputs].map((input) => input.value).join("");
        codeBlock.classList.remove("hidden");
        code.innerText = userCode;
      } else {
        inputs[key + 1].focus();
      }
    }
  });
});

// const reset = () => {
//   form.reset();
//   codeBlock.classList.add("hidden");
//   code.innerText = "";
// };