let sum = function() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result = Number(number1) + Number(number2);
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#sum").onclick = sum;

let subtract = function() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result = number1 - number2;
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#subtract").onclick = subtract;

let multiply = function() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result = number1 * number2;
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#multiply").onclick = multiply;

let divide = function() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result;
  if (number2 === 0) {
    result = "На ноль делить нельзя!";
  } else {
    result = number1 / number2;
  };
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#divide").onclick = divide;

let clear = () => {
  location.reload();
};
document.querySelector('#clear').onclick = clear;
