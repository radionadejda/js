const sum = function() {
	let number1 = prompt("введите первое слагаемое", 1);
	let number2 = prompt("введите второе слагаемое", 1);
	if (number1 === "" || number2 === "" || number1.includes(" ") || number2.includes(" ")) {
		alert("что-то пошло не так ☹, введите два числа");
	} else {
	let result = Number(number1) + Number(number2);
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`я думаю, сумма равна ${result} 😊`);
		confirm(`вы согласны?`);
		alert(`Вы так умны!`);
	}
}
};

const subtract = function() {
	let number1 = prompt("введите уменьшаемое", 1);
	let number2 = prompt("введите вычитаемое", 1);
	if (number1 === "" || number2 === "" || number1.includes(" ") || number2.includes(" ")) {
		alert("что-то пошло не так ☹, введите два числа");
	} else {
	let result = Number(number1) - Number(number2);
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`скорее всего, разница равна ${result} 😊`);
		confirm(`вы согласны?`);
		alert(`Вы умничка!`);
	}
}
};

const multiply = function() {
	let number1 = prompt("введите первый множитель", 1);
	let number2 = prompt("введите второй множитель", 1);
	if (number1 === "" || number2 === "" || number1.includes(" ") || number2.includes(" ")) {
		alert("что-то пошло не так ☹, введите два числа");
	} else {
	let result = Number(number1) * Number(number2);
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`смею предположить, произведение равно ${result} 😊`);
		confirm(`вы согласны?`);
		confirm(`Вы умничка?`);
	}
}
};

const divide = function() {
	let number1 = prompt("введите делимое", 1);
	let number2 = prompt("введите делитель", 1);
	if (number1 === "" || number2 === "" || number1.includes(" ") || number2.includes(" ")) {
		alert("что-то пошло не так ☹, введите два числа");
	} else {
	let result = Number(number1) / Number(number2);
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`очень вероятно, частное равно ${result} 😊`);
		confirm(`вы согласны?`);
		alert(`Вы умничка!`);
	}
}
};
