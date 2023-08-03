const button = document.querySelector("#btn");
const resultNumbers = document.querySelector("#result__numbers");
const resultMin = document.querySelector("#result__min");
const resultMax = document.querySelector("#result__max");
const resultSum = document.querySelector("#result__sum");
const resultProduct = document.querySelector("#result__product");
const resultAverage = document.querySelector("#result__average");

const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

button.addEventListener("click", () => {
	const numbers = [];

	for (let i = 0; i < 10; i++) {
		numbers.push(generateRandomNumber(-10, 10));
	};

	let min = Math.min(...numbers);
	let max = Math.max(...numbers);
	let sum = 0;
	let product = 1;

numbers.forEach (num => {
    sum += num;
	product *= num;
});

	let average = sum / numbers.length;

	resultNumbers.innerHTML = "Сгенерированные числа: " + numbers.join(", ");
	resultMin.innerHTML = "Минимальное число: " + min;
	resultMax.innerHTML = "Максимальное число: " + max;
	resultSum.innerHTML = "Сумма чисел: " + sum;
	resultProduct.innerHTML = "Произведение чисел: " + product;
	resultAverage.innerHTML = "Среднее арифметическое: " + average.toFixed(2);
});
