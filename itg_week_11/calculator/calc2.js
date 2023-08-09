
// вариант 1 - можно взять элемент за пределами функции, а получить значение и преобразовать его в число внутри функции. будет меньше строк кода, но если что-то поменяется в переменных number1 number2 вне функций, то поедет всё.
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

const sum = function() {
	let result = Number(number1.value) + Number(number2.value);
	let calc = document.getElementById("calc");
	let calcResult = document.createElement("p");
	calcResult.innerHTML = result;
	calc.append(calcResult);
};
document.querySelector("#sum").onclick = sum;

// вариант 2 - взять элемент и сразу получить его значение и преобразовать его в число внутри функции. это +2 строки кода внутри каждой функции, но зато изменить переменные можно только внутри функции.
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
	}
	let calc = document.getElementById("calc");
	let calcResult = document.createElement("p");
	calcResult.innerHTML = result;
	calc.append(calcResult);
};
document.querySelector("#divide").onclick = divide;

const clear = () => {
	location.reload();
};
document.querySelector("#clear").onclick = clear;
