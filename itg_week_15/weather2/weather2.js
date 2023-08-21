// const cities = ["Москва", "Якутск", "Караганда"];
const button = document.querySelector("#button");
const weather = document.querySelector("#weather");
const maxTemperature = document.querySelector("#maxTemperature");
const minTemperature = document.querySelector("#minTemperature");
let moscow = document.querySelector("#moscow");
let yakutsk = document.querySelector("#yakutsk");
let karaganda = document.querySelector("#karaganda");

let citiesCollection = document.querySelectorAll(".city");
let cities = [];
for (let city of citiesCollection) cities.push(city.textContent);
console.log(cities);

let getTemp = () => {
	let temperaturesCollection = document.querySelectorAll("input");
	let temperatures = [];
	for (let temperature of temperaturesCollection) temperatures.push(temperature.value);
	console.log(temperatures);

	let validTemperatures = [];
	let validCities = [];
	for (let i = 0; i < cities.length; i++) {
		if (temperatures[i] !== "" && temperatures[i] !== null && temperatures[i] !== undefined) {
			validTemperatures.push(temperatures[i]);
			validCities.push(cities[i]);
			const listItem = document.createElement("p");
			listItem.textContent = `${cities[i]}: ${temperatures[i]}`;
			weather.appendChild(listItem);
		}
	}
	console.log(validTemperatures, validCities);
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

const clear = () => {
	weather.innerHTML="";
    maxTemperature.textContent = "";
    minTemperature.textContent = "";
};
document.querySelector("#remove").onclick = clear;
