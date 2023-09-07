
class Calculator {
	static sum() {
		let number1 = Number(document.getElementById("number1").value);
		let number2 = Number(document.getElementById("number2").value);
		let result = number1 + number2;
calcResult.textContent = result;
	};
    static subtract() {
		let number1 = Number(document.getElementById("number1").value);
		let number2 = Number(document.getElementById("number2").value);
		let result = number1 - number2;
calcResult.textContent = result;
	}
    static multiply() {
		let number1 = Number(document.getElementById("number1").value);
		let number2 = Number(document.getElementById("number2").value);
		let result = number1 * number2;
calcResult.textContent = result;
	}
    static divide() {
		let number1 = Number(document.getElementById("number1").value);
		let number2 = Number(document.getElementById("number2").value);
		let result = number1 / number2;
calcResult.textContent = result;
	}
}
let calc = document.getElementById("calc");
		let calcResult = document.createElement("p");
		calc.append(calcResult);
document.querySelector("#sum").addEventListener("click", Calculator.sum)
document.querySelector("#subtract").addEventListener("click", Calculator.subtract)
document.querySelector("#multiply").addEventListener("click", Calculator.multiply)
document.querySelector("#divide").addEventListener("click", Calculator.divide)

const clear = () => {
	location.reload();
};
document.querySelector("#clear").onclick = clear;
