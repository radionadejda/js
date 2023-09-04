//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

const birthday = new Date(2023, 6, 12)
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 41);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

console.log(Math.floor((futureDate - currentDate)/1000/3600/24));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

console.log(Math.floor((currentDate - pastDate)/1000/3600/24));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek

// console.log(nextWeek.getDay());

let dayNumber = nextWeek.getDay();

let day =
  (dayNumber === 0) ? 'Воскресенье' :
    (dayNumber === 1) ? 'Понедельник' :
      (dayNumber === 2) ? 'Вторник' :
        (dayNumber === 3) ? 'Среда' :
          (dayNumber === 4) ? 'Четверг' :
            (dayNumber === 5) ? 'Пятница' :
              (dayNumber === 6) ? 'Суббота' :
                'Неизвестный день недели';

console.log(day);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

let futureYear = currentDate.getFullYear()+5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

let futureDateInFutureYear = new Date();
futureDateInFutureYear.setFullYear(futureYear, 6, 12);

console.log(futureDateInFutureYear);


//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

currentYear = currentDate.getFullYear();
console.log(futureYear - currentYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
let o = new Date(Date.parse(strDate));
console.log(o);



//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

const strDateTimestamp = Date.parse(strDate);
console.log(strDateTimestamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
let wrongDate = "2023-08-09T12:34:56";
let parseDate = Date.parse(wrongDate);

if (isNaN(parseDate)) {
    console.log("Неправильный формат даты");
} else {
    console.log("Правильный формат даты");
}

//Задание 18
// Используя инструкцию if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

if (number>0) {
    console.log(`число ${number} является положительным`);
} else {
    console.log(`число ${number} не является положительным`);
};

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 ===0) {
    console.log(`число ${number} является четным`);
} else {
    console.log(`число ${number} не является четным`);
};


//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

if (number%3 === 0) {
    console.log(`число ${number} является кратным 3`);
} else {
    console.log(`число ${number} не является кратным 3`);
};

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number.toString().length === 1) {
    console.log(`число ${number} является однозначным`);
} else {
    console.log(`число ${number} не является однозначным`);
};


//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

if (number.toString().length === 2) {
    console.log(`число ${number} является двузначным`);
} else {
    console.log(`число ${number} не является двузначным`);
};

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

if (number === 0 ) {
    console.log(`число ${number} является нулем`);
} else if (number>0) {
    console.log(`число ${number} является положительным`);
}else {
    console.log(`число ${number} не является положительным`);
};


//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

// вариант1
if (number%5 === 0 || number%7 === 0) {
    console.log(`число ${number} является кратным 5 или 7`);
} else {
    console.log(`число ${number} не является кратным 5 или 7`);
};

// вариант2

if (number%5 === 0 && number%7 === 0) {
    console.log(`число ${number} является кратным 5 и 7`);
} else if (number%5 === 0) {
    console.log(`число ${number} является кратным 5`);
} else if (number%7 === 0) {
    console.log(`число ${number} является кратным 7`);
} else {
    console.log(`число ${number} не является кратным 5 или 7`);
};

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

if (number === 0 ) {
    console.log(`число ${number} является нулем`);
} else if (number < 0) {
    console.log(`число ${number} является отрицательным`);
}else {
    console.log(`число ${number} не является отрицательным`);
};

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

if (number > 0 && number.toString().length === 3) {
    console.log(`число ${number} является трехзначным положительным числом`);
} else {
    console.log(`число ${number} не является трехзначным положительным числом`);
};

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let num = 6;

switch (num) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
     case 7:
        console.log('Воскресенье');
        break;
    default:
        console.log('задайте правильный день недели');
}


//Задание 28
// Используя конструкцию switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'w';
let fullName = 'direction';

switch (direction.toUpperCase()) {
    case 'N':
        console.log('Север');
        break;
    case 'S':
        console.log('Юг');
        break;
    case 'E':
        console.log('Восток');
        break;
    case 'W':
        console.log('Запад');
        break;
    default:
        console.log('направление может иметь значение N S W или E');
}