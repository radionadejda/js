//Задание 1
//Создайте функцию makeOne, которая пытается вызвать функцию functionWithErrors
//При этом отлавливает ошибку с помощью блока try/catch

function makeOne() {
	const resultOne = document.getElementById('result1');
	//Блок try
	functionWithErrors(); //Попытка вызова несуществующей функции
	resultOne.textContent = 'Функция вызвана без ошибок';
	//Блок catch
	resultOne.textContent = 'Ошибка была перехвачена: ' + error.message;
	console.error('Ошибка была перехвачена:', error.message);
}

document.querySelector('.b-1').addEventListener('click', makeOne);

//Задание 2
//Cоздайте функцию makeTwo, которая используя блок try/catch, создайте код, который пытается перезаписать константу e,
//и обрабатывает ошибку, если этот код не выполняется.

function makeTwo() {
	const resultTwo = document.getElementById('result2');
	//Ваш код
}

document.querySelector('.b-2').addEventListener('click', makeTwo);

//Задание 3
//Cоздайте функцию makeThree, которая используя блок try/catch, который пытается выполнить код с оператором `throw new Error`,
//и обрабатывает ошибку, если происходит попытка выполнить этот оператор.

function makeThree() {
	const resultThree = document.getElementById('result3');
	try {
		//Ваш код
	} catch (error) {
		resultThree.textContent = 'Ошибка была перехвачена: ' + error.message;
		console.error('Ошибка была перехвачена:', error.message);
	}
}

document.querySelector('.b-3').addEventListener('click', makeThree);

//Задание 4
//Cоздайте функцию makeFour, которая использует блок try/catch. Ошибка не должна выводиться на экран, а должен быть выведен результат умножения в элемент с id "result4".

function makeFour() {
	//Ваш код
}

document.querySelector('.b-4').addEventListener('click', makeFour);

//Задание 5
//Допишите функцю makeFive так, чтобы она использовала оператор throw для генерации исключения в случае ошибки

function makeFive() {
	let inputData = -1;
	if (inputData < 0)
		//Ваш код
		return inputData == 0 ? 1 : inputData * (inputData - 1);
}

document.querySelector('.b-5').addEventListener('click', makeFive);

//Задание 6
//Создайте функцию makeSix, которая ополнит код функции makeFive так, чтобы она использовала оператор throw для генерации исключения в случае ошибки, а затем перехватывала это исключение и выводила в консоль сообщение "Ошибка перехвачена".

function makeSix() {
	let inputData = -1;
	//Ваш код
}

document.querySelector('.b-6').addEventListener('click', makeSix);

//Задание 7
//Допишите функцию makeSeven так, что если делитель равен нулю, бросьте исключение с сообщением "Деление на ноль недопустимо".

function makeSeven() {
	let dividend = 10;
	let divisor = 0;
	//Ваш код
	return dividend / divisor;
}

document.querySelector('.b-7').addEventListener('click', makeSeven);

//Задание 8
//Добавьте в блок функции makeSeven блок try/catch, создайте новую функцию makeEight

function makeEight() {
	//Ваш код
}

document.querySelector('.b-8').addEventListener('click', makeEight);

//Задание 9
//Добавьте в код функции makeNine блок try/catch так, чтобы вместо ошибки выводилось цифра 1 в элемент с id "result9"

function makeNine() {
	//Тут добавляете try
	let a = 22;
	let c = a + d;
	//Тут catch
	//Вывод цифры в элемент
}

document.querySelector('.b-9').addEventListener('click', makeNine);

//Задание 10
//Добавьте в функцию makeTen блок try, в котором адрес будет проверяться на валидность и пробрасываться ошибка, если адрес некорректен
//Если проверка пройдена успешно, выведите сообщение "Email-адрес корректен" на страницу
//Если возникла ошибка (некорректный email), перехватите исключение с помощью блока catch
//В блоке catch выведите сообщение об ошибке на страницу

function makeTen() {
	let email = 'example.com';
	let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (!emailPattern.test(email)) {
		throw 'Некорректный email-адрес';
	}

	document.getElementById('.result7').textContent = 'Email-адрес корректен';
}

document.querySelector('.b-10').addEventListener('click', makeTen);

//Задание 11
//Допишите проверку телефона пользователя, если длина телефона менее 10 символов бросьте исключение throw new Error с сообщением "Некорректная длина телефонного номера"

function makeEleven() {
	phoneNumber = '06629820788';
	if (!/^\d+$/.test(phoneNumber)) {
		throw new Error('Телефонный номер должен состоять только из цифр');
	}
	//Ваш код
	console.log('Телефонный номер корректен');
}

document.querySelector('.b-11').addEventListener('click', makeEleven);

//Задание 12
//Создайте функцию makeTwelve, которая проверит возраст пользователя.
//Если возраст меньше 18 лет, необходимо бросить исключение типа Error с сообщением "Доступ запрещен для лиц младше 18 лет". В противном случае, выведите сообщение "Доступ разрешен".

function makeTwelve() {
	let age = 12;
	if (age < 18) {
		//Ваш код
	} else {
		//Ваш код
	}
}

document.querySelector('.b-12').addEventListener('click', makeTwelve);

//Задание 13
//Добавьте в функцию makeTwelve блок try/catch

function makeThirteen() {
	let age = 10;
	//Ваш код
}

document.querySelector('.b-13').addEventListener('click', makeThirteen);

//Задание 14
//Создайте функцию makeFourteen, которая будет подсчитывать размер скидки на товар
//Однако существует ограничение: скидка не может быть отрицательной и не может превышать 50%
//В случае нарушения этого ограничения, необходимо бросить исключение типа Error с сообщением "Некорректное значение скидки"
//В противном случае, выведите сообщение с размером скидки.
//Используйте блок try/catch

function makeFourteen() {
	let discount = 51;
	if (discount < 0 || discount > 50) {
		//Ваш код
	}
	console.log('Замените текст');
}

document.querySelector('.b-14').addEventListener('click', makeFourteen);

//Задание 15
//Есть функция makeFifteen в неё передаются два параметра: переменная ("а") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента
//В блоке catch вывести имя (свойство "name") с возникающей ошибки в элемент с id result15

function makeFifteen(a, func) {
	const resultFifteen = document.getElementById('result15');
	try {
		//Ваш код
	} catch (error) {
		//Ваш код
	}
}

document.querySelector('.b-15').addEventListener('click', makeFifteen);

//Задание 16
//Есть функция makeSixteen в неё передаются два параметра: число ("n") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с числом "n" в качестве аргумента
//В блоке catch вывести сообщение с описанием ошибки в элемент с id result16

function makeSixteen(n, func) {
	const resultSixteen = document.getElementById('result16');
	//Ваш код
}

document.querySelector('.b-16').addEventListener('click', makeSixteen);

//Задание 17
//Есть функция makeSeventeen в неё передаются два параметра: строка ("str") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с строкой "str" в качестве аргумента
//В блоке catch вывести сообщение с описанием ошибки в элемент с id result17

function makeSeventeen(str, func) {
	const resultSeventeen = document.getElementById('result17');
	//Ваш код
}

// добавьте слушатель события
document.querySelector('.b-17').addEventListener('click', makeSeventeen);

//Задание 18
//Создайте функцию makeEighteen и добавьте try, catch, finnaly так, чтобы в элемент с id result18 выводился 0 при ошибке
//А в элемент с id result18a всегда выводилось слово finnaly

function makeEighteen() {
	const resultEighteen = document.getElementById('result18');
	const forWordFinally = document.getElementById('result18a');
	//Блок try
	//Некорректная операция деления для примера, может вызвать ошибку
	if (true) {
		throw new Error('Division by zero');
	}
	const result = 12 / 0;
	resultEighteen.textContent = result;
	//Блок catch (error)
	console.error(error); //Вывод ошибки в консоль
	resultEighteen.textContent = '0'; //Вывод '0' при ошибке
	//Блок finally
}

document.querySelector('.b-18').addEventListener('click', makeEighteen);

//Задание 19
//Создайте функцию makeNineteen и добавьте try, catch, finally так, чтобы в элемент с id result19 выводилась сумма элементов массива при успешном выполнении функции и сообщение "Ошибка" при ошибке
//А в элемент с id result19a всегда выводилась строка "finally19"

function makeNineteen() {
	const resultNineteen = document.getElementById('result19');
	//Блок try
	const arr = [1, 2, 3];
	const sum = arr.reduce((acc, val) => acc + val, 0);
	resultNineteen.textContent = sum;
	//Блок catch (error)
	console.error(error); //Вывод ошибки в консоль
	//Ваш код
	//Блок finally
}

document.querySelector('.b-19').addEventListener('click', makeNineteen);

//Задание 20
//Создайте функцию makeTwenty и добавьте try, catch, finally так, чтобы в элемент с id result20 выводилось значение, возвращаемое функцией calculateValue, при успешном выполнении и сообщение "Ошибка" при ошибке
//А в элемент с id result20a всегда выводилась строка "finally20"

function calculateValue() {
	if (Math.random() < 0.5) {
		throw new Error('Произошла ошибка');
	}
	return 'Успешное выполнение';
}

function makeTwenty() {
	//Ваш код
}

// добавьте слушатель события
document.querySelector('.b-20').addEventListener('click', makeTwenty);

// Задание 21
// Создайте функцию makeTwentyOne и добавьте try, catch, finally так, чтобы в элемент с id result21 выводилось значение, возвращаемое функцией fetchData, при успешном выполнении и сообщение "Ошибка" при ошибке
// А в элемент с id result21a всегда выводилась строка "finally21"

function fetchData() {
	if (Math.random() < 0.5) {
		throw new Error('Произошла ошибка при получении данных');
	}
	return 'Данные успешно получены';
}

function makeTwentyOne() {
	//Ваш код
}

// добавьте слушатель события
document.querySelector('.b-21').addEventListener('click', makeTwentyOne);

//Задание 22
//Создайте функцию makeTwentyTwo, которая получает json файл, который некорректен. Чтобы предотвратить ошибку, добавьте блок try/catch.

const json = '{ некорректный JSON }';

function makeTwentyTwo() {
	const resultTwentyTwo = document.getElementById('result22');
	//Блок try
	let user = JSON.parse(json); //Возникает ошибка
	console.log(user.name); //Не сработает
	//Блок catch (e)
	resultTwentyTwo.textContent = 'Извините, в данных ошибка, мы попробуем получить их ещё раз.';
	console.log(e.name);
	console.log(e.message);
}

document.querySelector('.b-22').addEventListener('click', makeTwentyTwo);

//Задание 23
//Создайте функцию makeTwentyThree, которая получает JSON файл, который некорректен.
//Чтобы предотвратить ошибку, добавьте блок try/catch.

const jsonTwentyThree = '{ некорректный JSON }';

function makeTwentyThree() {
	const resultTwentyThree = document.getElementById('result23');
	//Ваш код
}

// Добавьте слушатель события
document.querySelector('.b-23').addEventListener('click', makeTwentyThree);

//Задание 24
//Создайте функцию makeTwentyFour, которая пытается выполнить некорректную операцию и использует оператор throw,
//ошибка обрабатывается в блоке catch

function makeTwentyFour() {
	const resultTwentyFour = document.getElementById('result24');
	//Блок try
	let divisor = 0;
	if (divisor === 0) {
		//Ваш код
	}
	let result = 24 / divisor;
	return result;
	//Блок catch (error)
}

document.querySelector('.b-24').addEventListener('click', makeTwentyFour);

//Задание 25
//Создайте функцию makeTwentyFive, которая с вероятностью 90% выбрасывает ошибку,
//и обрабатывает эту ошибку в блоке catch.

function makeTwentyFive() {
	const resultTwentyFive = document.getElementById('result25');
	//Блок try
	const randomValue = Math.random();
	if (randomValue <= 0.9) {
		throw new Error('Искусственная ошибка');
	}
	resultTwentyFive.textContent = 'Операция успешно выполнена';
	//Блок catch (error)
}

document.querySelector('.b-25').addEventListener('click', makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, которая использует setTimeout с блоком try/catch,
//чтобы обработать ошибку, которая может возникнуть при асинхронном выполнении кода.

function makeTwentySix() {
	const resultTwentySix = document.getElementById('result26');
	//Блок try
	setTimeout(() => {
		noSuchVariable; //Попытка обратиться к несуществующей переменной
	}, 1000);
	//Блок catch (error)
}

document.querySelector('.b-26').addEventListener('click', makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, которая использует async/await для асинхронной операции
//и блок try/catch, чтобы обработать ошибку, которая может возникнуть при этой асинхронной операции.

const resultTwentySeven = document.getElementById('result27');

function simulateAsyncOperation() {
	return new Promise((resolve, reject) => {
		if (Math.random() < 0.9) {
			reject(new Error('Произошла ошибка при асинхронной операции'));
		} else {
			resolve('Асинхронная операция успешно выполнена');
		}
	});
}

//Добавить название функции и ключевое слово async
//Подумайте, в каком месте нужно добавить await
// resultTwentySeven.textContent = 'Ожидание...';
// try {
// 	const result = simulateAsyncOperation();
// 	resultTwentySeven.textContent = 'Результат: ' + result;
// } catch (error) {
// 	resultTwentySeven.textContent = 'Произошла ошибка: ' + error.message;
// 	console.error(error.name);
// }

// document.querySelector('.b-27').addEventListener('click', makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая содержит код с использованием Promise.reject и setTimeout,
//демонстрирующий, что ошибки внутри этих операций не попадают в блок catch на том же уровне.

function makeTwentyEight() {
	const resultTwentyEight = document.getElementById('result28');
	resultTwentyEight.textContent = 'Ожидание...';
	try {
		Promise.reject('err')
			.then((result) => {
				resultTwentyEight.textContent = 'Успешное завершение: ' + result;
			})
			.catch((error) => {
				resultTwentyEight.textContent = 'Ошибка в Promise.reject: ' + error;
				console.error(error);
			});

		//Код с setTimeout
		setTimeout(() => {
			throw Error('ошибка');
		}, 1000);
	} catch (e) {
		resultTwentyEight.textContent = 'Ошибка на верхнем уровне: ' + e;
		console.log('Ошибка на верхнем уровне:', e);
	}
}

document.querySelector('.b-28').addEventListener('click', makeTwentyEight);

//Задание 29
//Создайте функцию handlePromise, которая содержит асинхронную операцию с использованием async/await
//и блок try/catch для обработки ошибки.

const resultTwentyNine = document.getElementById('result29');

function handlePromise() {
	//Блок try
	Promise.reject('это точно ошибка');
	//Блок catch (e)
	resultTwentyNine.textContent = 'Ошибка перехвачена: ' + e;
	console.log(e); //err
}

function makeTwentyNine() {
	handlePromise();
}

document.querySelector('.b-29').addEventListener('click', makeTwentyNine);

//Задание 30
//Выполнение функции упадёт в блок catch?
//Ответ будет доступен при нажатии на кнопку "Узнать ответ"

function makeThirty() {
	const resultTwentyThirty = document.getElementById('result30');
	resultTwentyThirty.textContent = string;
	return;
	try {
		while (true) {
			// Бесконечный цикл
		}
	} catch (error) {
		resultTwentyThirty.textContent = 'Произошла ошибка: ' + error.message;
		console.error('Произошла ошибка:', error.message);
	}
}

document.querySelector('.b-30').addEventListener('click', makeThirty);
