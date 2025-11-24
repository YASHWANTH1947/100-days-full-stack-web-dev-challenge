const operator = prompt("Give the operator for the operation?");
let num1 = Number(prompt("Give first operand:"));
let num2 = Number(prompt("Give second operand:"));
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("wrong and unidentified operator found.");
    break;
}

alert(`Result:${result}`);
