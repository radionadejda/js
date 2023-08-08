  let number1 = Number(document.getElementById("number1"));
  let number2 = Number(document.getElementById("number2"));
  
  const sum = function() {
  
  let result = Number(number1.value) + Number(number2.value);
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#sum").onclick = sum;

const subtract = function() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result = number1 - number2;
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#subtract").onclick = subtract;

const multiply = function() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result = number1 * number2;
  let calc = document.getElementById("calc");
  let calcResult = document.createElement("p");
  calcResult.innerHTML = result;
  calc.append(calcResult);
};
document.querySelector("#multiply").onclick = multiply;

const divide = function() {
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

const clear = () => {
  location.reload();
};
document.querySelector('#clear').onclick = clear;
