const sum = function() {
	let number1 = Number(prompt("введите первое слагаемое", 1));
	let number2 = Number(prompt("введите второе слагаемое", 1));
	let result = number1 + number2;
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`я думаю, сумма равна ${result} 😊`);
		confirm(`вы согласны?`);
		alert(`Вы так умны!`);
	}
};

const subtract = function() {
	let number1 = Number(prompt("введите уменьшаемое", 1));
	let number2 = Number(prompt("введите вычитаемое", 1));
	let result = number1 - number2;
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`скорее всего, разница равна ${result} 😊`);
		confirm(`вы согласны?`);
		alert(`Вы умничка!`);
	}
};

const multiply = function() {
	let number1 = Number(prompt("введите первый множитель", 1));
	let number2 = Number(prompt("введите второй множитель", 1));
	let result = number1 * number2;
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`смею предположить, произведение равно ${result} 😊`);
		confirm(`вы согласны?`);
		confirm(`Вы умничка?`);
	}
};

const divide = function() {
	let number1 = Number(prompt("введите делимое", 1));
	let number2 = Number(prompt("введите делитель", 1));
	let result = number1 / number2;
	if (isNaN(result)) {
		alert("что-то пошло не так ☹, попробуйте еще раз");
	} else {
		alert(`очень вероятно, частное равно ${result} 😊`);
		confirm(`вы согласны?`);
		alert(`Вы умничка!`);
	}
};
