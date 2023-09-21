const button = document.querySelector("#button");
const weather = document.querySelector("#weather");
const maxTemperature = document.querySelector("#maxTemperature");
const minTemperature = document.querySelector("#minTemperature");


let cities = [];
let listItems = [];
// получаем все города по классу, добавляем их в массив cities
let citiesCollection = document.getElementsByClassName("city");
for (let city of citiesCollection) {
    cities.push(city.textContent);
	// создаем параграфы для вывода температур
	let listItem = document.createElement("p");
	// пока прячем
	listItem.style.display = "none";
	// добавляем в родительский див
	weather.appendChild(listItem);
	// добавляем в массив для последующего вывода
	listItems.push(listItem);
}

// проверяем, что получилось
// console.log(cities);

let getTemp = () => {
//обнуляем ранее введенные данные
	for (let listItem of listItems) {
        listItem.textContent = "";
    }
//получаем введенные показатели температуры и добавляем их в массив temperatures
	let temperaturesCollection = document.querySelectorAll("input");
	let temperatures = [];
	for (let temperature of temperaturesCollection) temperatures.push(temperature.value);
	// проверяем, что получилось
	// console.log(temperatures);

	let validTemperatures = [];
	let validCities = [];
	//проверяем введенные данные на валидность, добавляем их в массив
	for (let i = 0; i < cities.length; i++) {
		if (temperatures[i] !== "" && temperatures[i] !== null && temperatures[i] !== undefined && !isNaN(temperatures[i])) {
			validTemperatures.push(Number(temperatures[i]));
			// добавляем в массив города, которым введены валидные температуры
			validCities.push(cities[i]);
			// выводим на станицу валидные города и температуры
			listItems[i].textContent += `${cities[i]}: ${temperatures[i]}; `;
			listItems[i].style.display = "block";
		}
	}

	// проверяем, что получилось
	// console.log(validTemperatures, validCities);

//проверка и вывод макс и мин температур
	if (validTemperatures.length > 0) {
		let maxTemp = Math.max(...validTemperatures);
		let minTemp = Math.min(...validTemperatures);
		maxTemperature.textContent = `Максимальная температура: ${maxTemp}`;
		minTemperature.textContent = `Минимальная температура: ${minTemp}`;
	} else {
		maxTemperature.textContent = `Максимальная температура не введена`;
		minTemperature.textContent = `Минимальная температура не введена`;
	}

    for (let temp of temperaturesCollection) {temp.value = ""};
};

button.addEventListener("click", getTemp);

//очистка всего по кнопке
const clear = () => {
	weather.innerHTML="";
    maxTemperature.textContent = "";
    minTemperature.textContent = "";
};
document.querySelector("#remove").onclick = clear;
