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

let screnCalculator = document.querySelector(".number");

let keys = document.querySelector(".section_number");

let previousKeyType = keys.dataset.previousKeyType;

let operadores = ["add", "subtract", "multiply", "divide"];

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const active = key.dataset.active;
    const keyContent = key.textContent;
    const displayNum = screnCalculator.textContent;
    Array.from(key.parentNode.children).forEach((e) => {
      e.classList.remove("is-depressed");
    });
    console.log(previousKeyType);
    if (!active) {
      if (
        displayNum === "0" ||
        operadores.includes(screnCalculator.dataset.previousKeyType)
      ) {
        screnCalculator.textContent = keyContent;
      } else {
        screnCalculator.textContent = displayNum + keyContent;
      }
    }
    if (
      active === "add" ||
      active === "subtract" ||
      active === "multiply" ||
      active === "divide"
    ) {
      key.classList.add("is-depressed");
      screnCalculator.dataset.firstValue = displayNum;
      screnCalculator.dataset.previousKeyType = active;
    }
    if (active === "clear") {
    }
    if (active === "calculator") {
      const firstValue = screnCalculator.dataset.firstValue;
      const operator = screnCalculator.dataset.previousKeyType;
      console.log(operator);
      const secondValue = displayNum;
      const calculate = (n1, operadores, n2) => {
        let result = "";
        if (operator === "add") {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === "subtract") {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === "divide") {
          result = parseFloat(n1) / parseFloat(n2);
        } else if (operator === "multiply") {
          result = parseFloat(n1) * parseFloat(n2);
        }
        return result;
      };
      screnCalculator.textContent = calculate(
        firstValue,
        operadores,
        secondValue
      );
    }
    if (active === "decimal") {
      screnCalculator.textContent = displayNum + ".";
      console.log("decimal");
    }
    if (active === "return") {
      console.log("return");
    }
  }
});
