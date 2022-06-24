const operator = prompt(
  "Select the operator you would like to use (+ - * % /)"
);

const numberOne = parseFloat(prompt("Enter the first number"));
const numberTwo = parseFloat(prompt("Enter second number"));

if (operator == "+") {
  result = numberOne + numberTwo;
} else if (operator == "-") {
  result = numberOne - numberTwo;
} else if (operator == "*") {
  result = numberOne * numberTwo;
} else if (operator == "%") {
  result = numberOne % numberTwo;
} else if (operator == "/") {
  result = numberOne / numberTwo;
}
alert("Your result is:\n" + result);
