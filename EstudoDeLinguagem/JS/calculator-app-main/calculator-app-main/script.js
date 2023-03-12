let inputs = document.querySelectorAll("input[type='radio']");

let marginLeft = document.querySelector(".circle__input");

let body = document.querySelector("body");

inputs.forEach((element) => {
  element.addEventListener("click", (clickInput) => {
    marginLeft.style.marginLeft = clickInput.target.value * 15 + "px";
    if (clickInput.target.value == 0) {
      body.style.background = "hsl(222, 26%, 31%)";
    } else if (clickInput.target.value == 1) {
      body.style.background = "hsl(0, 0%, 90%)";
    } else if (clickInput.target.value == 2) {
      body.style.background = "hsl(268, 75%, 9%)";
    }
  });
});

let buttons = document.querySelectorAll("button");
let screnNumber = document.querySelector(".numero");
let Operators = document.querySelector(".operators");
buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (!isNaN(value) || value === ".") {
      screnNumber.textContent += value;
      console.log(value);
    } else if (value == Operators) {
      return "";
    } else if (screnNumber !== "") {
      let valueOperators = e.target.innerText;
      screnNumber.innerText += valueOperators;
      console.log(Operators);
    }
  });
});
