const button = document.querySelector("#button");
const weather = document.querySelector("#weather");
const maxTemperature = document.querySelector("#maxTemperature");
const minTemperature = document.querySelector("#minTemperature");

let citiesCollection = document.getElementsByClassName("city");
let cities = [];
let listItems = [];
//цикл добавляет города в массив
for (let city of citiesCollection) {
    cities.push(city.textContent);
	let listItem = document.createElement("p");
	listItem.classList.add('resultCity');
	listItem.textContent = `${city.textContent}: `;
	listItem.style.display = "none";
	weather.appendChild(listItem);
	listItems.push(listItem);
}

// console.log(cities);
// console.log(listItems[0]);

let getTemp = () => {
	//вот этот участок обнуляет сначала введенные данные
	for (let listItem of listItems) {
        listItem.textContent = "";
    }
//
	let temperaturesCollection = document.querySelectorAll("input");
	let temperatures = [];
	for (let temperature of temperaturesCollection) temperatures.push(temperature.value);
	console.log(temperatures);
//массивы с температурой и городами и проверки на валидность
	let validTemperatures = [];
	let validCities = [];
	for (let i = 0; i < cities.length; i++) {
		if (temperatures[i] !== "" && temperatures[i] !== null && temperatures[i] !== undefined) {
			validTemperatures.push(temperatures[i]);
			validCities.push(cities[i]);
			listItems[i].textContent += `${cities[i]}: ${temperatures[i]}; `;
			listItems[i].style.display = "block";
		} else {
			listItems[i].style.display = "none";
		}
	}
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

    for (temp of temperaturesCollection) {temp.value = ""};
};

button.addEventListener("click", getTemp);
//очистка всего по кнопке
const clear = () => {
	weather.innerHTML="";
    maxTemperature.textContent = "";
    minTemperature.textContent = "";
};
document.querySelector("#remove").onclick = clear;
