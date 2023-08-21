//Задание 1
// Выведите числа от 1 до 10 в консоль
let i = 0;
// while (i++ < 10) console.log(i);

// вар 2
// for (let y=1; y<=10; y++) console.log(y);

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

// i=0;
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

// i = 11;
// while (i-- > 1) console.log(i);

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

// i = 0;
// while (i++ < 10) console.log(`${i} * 5 = ${i*5}`);

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(`Вычислить сумму чисел от 1 до 100: ${sum}`);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for

const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i=0; i<numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);


//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже существующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];

// for (let i = 0; i < animals.length; i++) {
//   animals[i] = animals[i] + " - прекрасное животное";
//   console.log(animals[i]);
// }

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';

// for (let symbol of str) console.log(symbol);

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

// for (const element of array) {
//     console.log(element);
//   }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];


// for (let sentence of sentences) {
//     sentence = sentence.replace(/[,?!]/g,'');
//     let words = sentence.split(' ');
//     for (let word of words) {
//         console.log(word);
//     }
// }

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

// sum = 0;
// for (const number of numbers) {
//   sum += number;
// }
// console.log(`Сумма всех элементов массива: ${sum}`);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];

// for (let item of list) {
//     console.log(item.length)
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

// объявление массива перенесено из задания 16
const words = ['Hello', 'world', '!'];
const upperCase = [];

// for (const word of words) {
//   upperCase.push(word.toUpperCase());
// }

// console.log(upperCase);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

// let symbols = greeting.split('');
// let count=0;
// for (let symbol of symbols) {
// if (vowels.includes(symbol)) {
//         count++;
//     }
// }
// console.log(count);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!']; массив объявлен в задании 14

// const combined = words.join(' ');
// console.log(combined);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

// i = 0;
// while (i++ < 10) console.log(i);

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let number = 10;

// while (number >= 1) {
//   console.log(number);
//   number--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let n=0;

// while (n < allNumbers.length) {
//     allPositive = true;
//     n++;
//     if (allNumbers[n]<=0) {
//         allPositive = false;
//         console.log(allPositive);
//         break;
//     }
// };

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
// i=0;
// do {
//   console.log(random[i]);
//   i++;
// } while (random[i] >= 0 && i < random.length);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

// number = 1;
// do {
//     if (number%3 === 0) {
//         number++;
//     } else {
//     console.log(number);
//     number++;
//     }
// } while (number <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

// sum = 0;
// while (sum <= 100) {
// let Input = parseFloat(prompt("Введите число:"));
// sum += Input;
// }
// if (isNaN(sum)){
//   console.log("введены неверные данные");
// } else {
// console.log(`сумма чисел: ${sum}`)
// console.log("Сумма чисел превысила 100.");
// }

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

// let titles = document.querySelectorAll("h4");

// for (let title of titles) {
//     title.style.color = "blue";
// }

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
// это генератор названий для IKEA!

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

// let maxLength = 6;
// let alphabetLength = alphabet.length;
// while (randomString.length < maxLength) {
//   let randomWords = Math.floor(Math.random() * alphabetLength);
// randomString += alphabet[randomWords];
// }

// console.log(randomString);