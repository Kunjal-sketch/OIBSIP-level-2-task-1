const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentNumber = "";
let firstNumber = null;
let operator = null;
let resultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    switch (buttonText) {
      case "C":
        clearDisplay();
        break;
      case "←":
        deleteLastNumber();
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        handleOperator(buttonText);
        break;
      case ".":
        addDecimal();
        break;
      case "=":
        calculate();
        break;
      default:
        addNumber(buttonText);
        break;
    }
  });
});

function addNumber(number) {
  if (resultDisplayed) {
    clearDisplay();
  }
  currentNumber += number;
}
