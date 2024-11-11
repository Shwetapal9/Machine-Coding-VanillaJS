const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";
const specialCharacters = ["%", "*", "-", "+", "=", "/"];
console.log(display);
function calculate(input) {
  if (input === "=" && output !== "") {
    output = eval(output);
  } else if (input === "AC") {
    output = "";
  } else if (input === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialCharacters.includes(input)) return;
    output += input;
  }

  display.value = output;
}

// Add Event listener to buttons and call calculate function

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calculate(event.target.dataset.value);
  });
});
