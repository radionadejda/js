//Задание 1
//Найдите сумму num1 и num2. Добавьте слушатель события на кнопку "Задание 1" и выведите результат на экран.

const buttonOne = document.querySelector('.b-1');
const resultOne = document.querySelector('#resultOne');

const makeOne = () => {
	const num1 = 5;
	const num2 = 10;
	result = num1 + num2;
	resultOne.innerText = "сумма равна " + result;
};

buttonOne.addEventListener('click', makeOne); //Слушатель уже добавлен

//Задание 2
//Найдите разность num1 и num2. Добавьте слушатель события на кнопку "Задание 2" и выведите результат на экран.

const buttonTwo = document.querySelector('.b-2');
const resultTwo = document.querySelector('#resultTwo');

const makeTwo = () => {
	const num1 = 20;
	const num2 = 7;
	//Ваш код
	result = num1 - num2;
	resultTwo.innerText = "разность равна" + result;
};

//Добавьте слушатель события
buttonTwo.addEventListener('click', makeTwo);

//Задание 3
//Найдите произведение num1 и num2. Добавьте слушатель события на кнопку "Задание 3" и выведите результат на экран.

const buttonThree = document.querySelector('.b-3');
const resultThree = document.querySelector('#resultThree');

const makeThree = () => {
	const num1 = 8;
	const num2 = 4;
	result = num1*num2;
	resultThree.innerText = "произведение равно " + result;
};

//Добавьте слушатель события
buttonThree.addEventListener('click', makeThree);

//Задание 4
//Найдите результат операции деления num1 на num2. Добавьте слушатель события на кнопку "Задание 4" и выведите результат на экран.

const buttonFour = document.querySelector('.b-4');
const resultFour = document.querySelector('#resultFour');

const makeFour = () => {
	const num1 = 16;
	const num2 = 2;
	result = num1 / num2;

    resultFour.innerText = "частное равно " + result;
};

//Добавьте слушатель события
buttonFour.addEventListener('click', makeFour);

//Задание 5
//Возведите число num в степень power. Добавьте слушатель события на кнопку "Задание 5" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonFive = document.querySelector('.b-5');
const resultFive = document.querySelector('#resultFive');

const makeFive = () => {
	const num = 3;
	const power = 4;
	result = Math.pow(num, power);
	resultFive.innerText = "результат возведения в степень равен " + result;
};

//Добавьте слушатель события
buttonFive.addEventListener('click', makeFive);


//Задание 6
//Найдите результат от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 6" и выведите результат на экран.

const buttonSix = document.querySelector('.b-6');
const resultSix = document.querySelector('#resultSix');

const makeSix = () => {
	const num1 = 20;
	const num2 = 5;
	result = num1 / num2;

    resultSix.innerText = "результат деления " + result;
};

// Добавьте слушатель события
buttonSix.addEventListener('click', makeSix);

//Задание 7
//Найдите остаток от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 7" и выведите результат на экран.

const buttonSeven = document.querySelector('.b-7');
const resultSeven = document.querySelector('#resultSeven');

const makeSeven = () => {
	const num1 = 25;
	const num2 = 7;
	result = num1%num2;
	resultSeven.innerText = "остаток от деления равен " + result;
};

//Добавьте слушатель события
buttonSeven.addEventListener('click', makeSeven);

//Задание 8
//Найдите остаток от деления num1 на 10. Добавьте слушатель события на кнопку "Задание 8" и выведите результат на экран.

const buttonEight = document.querySelector('.b-8');
const resultEight = document.querySelector('#resultEight');

const makeEight = () => {
	const num1 = 123;
	result = num1 % 10;
    resultEight.innerText = "остаток от деления равен " + result;
};

buttonEight.addEventListener('click', makeEight);

//Задание 9
//Найдите остаток от деления num1 на 100. Добавьте слушатель события на кнопку "Задание 9" и выведите результат на экран.

const buttonNine = document.querySelector('.b-9');
const resultNine = document.querySelector('#resultNine');

const makeNine = () => {
	const num1 = 4567;
	result = num1%100;
	resultNine.innerText = "остаток от деления равен " + result;
};

//Добавьте слушатель события
buttonNine.addEventListener('click', makeNine);

//Задание 10
//Найдите символ по индексу 2 в строке "Hello". Добавьте слушатель события на кнопку "Задание 10" и выведите результат на экран.

const buttonTen = document.querySelector('.b-10');
const resultTen = document.querySelector('#resultTen');

const makeTen = () => {
	const str = 'Hello';
	result = str.charAt(2);
    resultTen.innerText = resultTen.innerText = "символ по индексу 2 в строке Hello: " + result;
};

buttonTen.addEventListener('click', makeTen);

//Задание 11
//Выведите на экран результат операции 5 взятое по модулю 2. Добавьте слушатель события на кнопку "Задание 11" и выведите результат на экран.

const buttonEleven = document.querySelector('.b-11');
const resultEleven = document.querySelector('#resultEleven');

const makeEleven = () => {
	num1 = 5;
	num2 = 2;
	result = num1%num2;
	resultEleven.innerText = "результат операции 5 взятое по модулю 2 равен " + result;
};

//Добавьте слушатель события
buttonEleven.addEventListener('click', makeEleven);

//Задание 12
//Объедините строки str1 и str2. Добавьте слушатель события на кнопку "Задание 12" и выведите результат на экран.

const buttonTwelve = document.querySelector('.b-12');
const resultTwelve = document.querySelector('#resultTwelve');

const makeTwelve = () => {
	const str1 = 'Hello, ';
	const str2 = 'World!';
	result = str1 + str2;
    resultTwelve.innerText = "результат объединения строк: " + result;
};

buttonTwelve.addEventListener('click', makeTwelve);
//Задание 13
//Найдите длину строки str. Добавьте слушатель события на кнопку "Задание 13" и выведите результат на экран.

const buttonThirteen = document.querySelector('.b-13');
const resultThirteen = document.querySelector('#resultThirteen');

const makeThirteen = () => {
	const str = 'JavaScript';
	result = str.length;
	resultThirteen.innerText = "длина строки равна " + result;
};

//Добавьте слушатель события
buttonThirteen.addEventListener('click', makeThirteen);

//Задание 14
//Приведите строку str к нижнему регистру. Добавьте слушатель события на кнопку "Задание 14" и выведите результат на экран.

const buttonFourteen = document.querySelector('.b-14');
const resultFourteen = document.querySelector('#resultFourteen');

const makeFourteen = () => {
	const str = 'JavaScript';
	result = str.toLowerCase();
    resultFourteen.innerText = result;
};

buttonFourteen.addEventListener('click', makeFourteen);

//Задание 15
//Приведите строку str к верхнему регистру. Добавьте слушатель события на кнопку "Задание 15" и выведите результат на экран.

const buttonFifteen = document.querySelector('.b-15');
const resultFifteen = document.querySelector('#resultFifteen');

const makeFifteen = () => {
	const str = 'JavaScript';
	result = str.toUpperCase();
	resultFifteen.innerText = result;
};

//Добавьте слушатель события
buttonFifteen.addEventListener('click', makeFifteen);

//Задание 16
//Получите подстроку из строки str, начиная с индекса 3 и до конца строки. Добавьте слушатель события на кнопку "Задание 16" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSixteen = document.querySelector('.b-16');
const resultSixteen = document.querySelector('#resultSixteen');

const makeSixteen = () => {
	const str = 'JavaScript';
	result = str.substring(3);
    resultSixteen.innerText = result;
};

buttonSixteen.addEventListener('click', makeSixteen);

//Задание 17
//Получите подстроку из строки str, начиная с индекса 3 и до индекса 7 (не включая его). Добавьте слушатель события на кнопку "Задание 17" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSeventeen = document.querySelector('.b-17');
const resultSeventeen = document.querySelector('#resultSeventeen');

const makeSeventeen = () => {
	const str = 'JavaScript';
	result = str.substring(3, 7);
	resultSeventeen.innerText = result;
};

//Добавьте слушатель события
buttonSeventeen.addEventListener('click', makeSeventeen);

//Задание 18
//Замените все вхождения подстроки 'world' на 'JavaScript' в строке str. Добавьте слушатель события на кнопку "Задание 18" и выведите результат на экран.
//Подсказка: Для замены подстрок в строке используйте метод replace()
const buttonEighteen = document.querySelector('.b-18');
const resultEighteen = document.querySelector('#resultEighteen');

const makeEighteen = () => {
	const str = 'Hello, world!';
	result = str.replace('world', 'JavaScript');
    resultEighteen.innerText = result;
};

buttonEighteen.addEventListener('click', makeEighteen);

//Задание 19
//Получите подстроку из строки str, начиная с индекса 7 и длиной 6 символов. Добавьте слушатель события на кнопку "Задание 19" и выведите результат на экран.

const buttonNineteen = document.querySelector('.b-19');
const resultNineteen = document.querySelector('#resultNineteen');

const makeNineteen = () => {
	const str = 'Hello, world!';
	result = str.substr(7, 6);
	resultNineteen.innerText = result;
};

//Добавьте слушатель события
buttonNineteen.addEventListener('click', makeNineteen);


//Задание 20
//Найдите максимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 20" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.max()

const buttonTwenty = document.querySelector('.b-20');
const resultTwenty = document.querySelector('#resultTwenty');

const makeTwenty = () => {
	const numbers = [10, 25, 5, 30, 15];
    result = Math.max(...numbers);
    resultTwenty.innerText = result;
};

buttonTwenty.addEventListener('click', makeTwenty);

// Задание 21
// Выведите на экран случайное целое число от 1 до 10. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.

const buttonTwentyOne = document.querySelector('.b-21');
const resultTwentyOne = document.querySelector('#resultTwentyOne');

const makeTwentyOne = () => {
	result = Math.ceil(Math.random()*10);
	resultTwentyOne.innerText = result;
};

//Добавьте слушатель события
buttonTwentyOne.addEventListener('click', makeTwentyOne);

//Задание 22
//Найдите минимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.min()

const buttonTwentyTwo = document.querySelector('.b-22');
const resultTwentyTwo = document.querySelector('#resultTwentyTwo');

const makeTwentyTwo = () => {
	const numbers = [10, 25, 5, 30, 15];
    result= Math.min(...numbers);
    resultTwentyTwo.innerText = result;
};

buttonTwentyTwo.addEventListener('click', makeTwentyTwo);

//Задание 23
//Выведите на экран результат возведения числа 2 в степень 5. Добавьте слушатель события на кнопку "Задание 23" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonTwentyThree = document.querySelector('.b-23');
const resultTwentyThree = document.querySelector('#resultTwentyThree');

const makeTwentyThree = () => {
	result = Math.pow(2, 5);
	resultTwentyThree.innerText = result;
};

//Добавьте слушатель события
buttonTwentyThree.addEventListener('click', makeTwentyThree);

//Задание 24
//Выведите на экран наименьшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 24" и выведите результат на экран.

const buttonTwentyFour = document.querySelector('.b-24');
const resultTwentyFour = document.querySelector('#resultTwentyFour');

const makeTwentyFour = () => {
    result = Math.min(7, 3, 11, 5, 9);
    resultTwentyFour.innerText = result;
};

buttonTwentyFour.addEventListener('click', makeTwentyFour);
//Задание 25
//Выведите на экран наибольшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 25" и выведите результат на экран.

const buttonTwentyFive = document.querySelector('.b-25');
const resultTwentyFive = document.querySelector('#resultTwentyFive');

const makeTwentyFive = () => {
	result = Math.max(7, 3, 11, 5, 9);
	resultTwentyFive.innerText = result;
};

//Добавьте слушатель события
buttonTwentyFive.addEventListener('click', makeTwentyFive);


//Задание 26
//Выведите на экран случайное число от 0 до 1 с точностью до 4 знаков после запятой. Добавьте слушатель события на кнопку "Задание 26" и выведите результат на экран.
//Подсказка: Используйте метод toFixed(4)

const buttonTwentySix = document.querySelector('.b-26');
const resultTwentySix = document.querySelector('#resultTwentySix');

const makeTwentySix = () => {
	result = Math.random().toFixed(4);
    resultTwentySix.innerText = result;
};

buttonTwentySix.addEventListener('click', makeTwentySix);

//Задание 27
//Выведите на экран случайное целое число от 50 до 100. Добавьте слушатель события на кнопку "Задание 27" и выведите результат на экран.

const buttonTwentySeven = document.querySelector('.b-27');
const resultTwentySeven = document.querySelector('#resultTwentySeven');

const makeTwentySeven = () => {
	min = 50;
	max = 100;
	result = Math.floor(Math.random() * (max - min + 1) + min);
	resultTwentySeven.innerText = result;
};

//Добавьте слушатель события
buttonTwentySeven.addEventListener('click', makeTwentySeven);

//Задание 28
//Округлите число 4.47 в большую сторону с помощью метода Math.ceil(). Добавьте слушатель события на кнопку "Задание 28" и выведите результат на экран.

const buttonTwentyEight = document.querySelector('.b-28');
const resultTwentyEight = document.querySelector('#resultTwentyEight');

const makeTwentyEight = () => {
	const num = 4.47;
    result = Math.ceil(num);
    resultTwentyEight.innerText = result;
};

buttonTwentyEight.addEventListener('click', makeTwentyEight);

//Задание 29
//Получите квадратный корень из числа 16 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 29" и выведите результат на экран.

const buttonTwentyNine = document.querySelector('.b-29');
const resultTwentyNine = document.querySelector('#resultTwentyNine');

const makeTwentyNine = () => {
	num = 16;
	result = Math.sqrt(num);
	resultTwentyNine.innerText = result;
};

//Добавьте слушатель события
buttonTwentyNine.addEventListener('click', makeTwentyNine);

//Задание 30
//Получите квадратный корень из числа 25 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 30" и выведите результат на экран.

const buttonThirty = document.querySelector('.b-30');
const resultThirty = document.querySelector('#resultThirty');

const makeThirty = () => {
	const num = 25;
    result = Math.sqrt(num);
    resultThirty.innerText = result;
};

buttonThirty.addEventListener('click', makeThirty);
