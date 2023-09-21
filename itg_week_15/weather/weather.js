const cities = ['Москва', 'Якутск', 'Сахалин'];
const temperatures = [];
let maxTemp = "не введена";
let minTemp = "не введена";

const weather = document.querySelector('#weather');
const maxTemperature = document.querySelector('#maxTemperature');
const minTemperature = document.querySelector('#minTemperature');

function isValidTemperature(temp){
    // temp = prompt(`Введите температуру в городе ${city}:`).value;
    return temp.trim()!==''&& temp !== null && !isNaN(temp)
}

for (const city of cities) {
    const temperature = prompt(`Введите температуру в городе ${city}:`);
    // if (temperature === '' || temperature === null) {
    //     alert('Введите корректную температуру.');
    //     break
    // } else if (isNaN(temperature)) {
    //     alert('Введите корректную температуру.');
    //     break
    if (!isValidTemperature(temperature)) {
        alert('Введите корректную температуру.');
        break
    } else {
    temperatures.push(Number(temperature));
    console.log(temperatures);
    }

    maxTemp = Math.max(...temperatures);
    minTemp = Math.min(...temperatures);

    const listItem = document.createElement('p');
    listItem.textContent = `${city}: ${temperature}`;
    weather.appendChild(listItem);
}

maxTemperature.textContent = `Максимальная температура: ${maxTemp}`;
minTemperature.textContent = `Минимальная температура: ${minTemp}`;