import * as bootstrap from "bootstrap";
import moment from "moment";
import ru from "moment/locale/ru.js";
import Chart from "chart.js/auto";

// сделать массив с задачами, который в JSON должен быть
// я понимаю, что правильно было бы реализовать возможность добавления и изменения задач пользователем, но не успеваю за одну неделю, и задание скорее на отработку подключения модулей.
// там же потянется обработка некорректного ввода, вывод ошибок, обновление массива и обновление вывода на страницу.

// making chart
const context = document.getElementById("chart").getContext("2d");
const color1 = "rgba(221, 19, 227, 0.8)";
const color2 = "rgba(255, 138, 22, 0.8)";

const tasksChart = new Chart(context, {
	type: "bar",
	data: {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			// здесь данные задач
			{
				label: "project1",
				data: [1, 3, 5, 1, 2, 0, 0],
				backgroundColor: color1,
                borderColor: color1,
				hoverOffset: 20
			},
			{
				label: "project2",
				data: [4, 5, 1, 0, 1, 1, 0],
				backgroundColor: color2,
                borderColor: color1,
				hoverOffset: 20
			}
		]
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: "my projects progress",
                font: {
                    size: 17,
                }
			},
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 13,
                    }
                }
		}},
		responsive: true,
        maintainAspectRatio: false,
        barThickness: 40,
		scales: {
			x: {
				stacked: true,
                display: false
			},
			y: {
				stacked: true,
			}
		},
        elements: {
            bar: {
                borderWidth: 2,
                borderRadius: 9
            }
        }
	}
});

// making date in footer
const date = document.getElementById('date');

function updateClock() {
	let currentTime = moment();
	let formattedTime = currentTime.format('DD/MM/YYYY dddd HH:mm:ss');
	date.textContent = formattedTime;
}

setInterval(updateClock, 1000);