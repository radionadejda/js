import * as bootstrap from "bootstrap";
import moment from "moment";
import ru from "moment/locale/ru.js";
import Chart from "chart.js/auto";

// сделать массив с задачами, который в JSON должен быть
let tasks = [
	{
		"title": "задача 1",
		"status": "в процессе",
		"priority": "высокий",
		"startDate": "2023-10-01",
		"endDate": "2023-10-10"
	},
	{
		"title": "задача 2",
		"status": "выполнено",
		"priority": "высокий",
		"startDate": "2023-10-01",
		"endDate": "2023-10-05"
	},
	{
		"title": "задача 3",
		"status": "в процессе",
		"priority": "низкий",
		"startDate": "2023-10-10",
		"endDate": "2023-11-10"
	},
	{
		"title": "задача 4",
		"status": "выполнено",
		"priority": "средний",
		"startDate": "2023-09-01",
		"endDate": "2023-10-01"
	},
	{
		"title": "задача 5",
		"status": "в процессе",
		"priority": "высокий",
		"startDate": "2023-10-01",
		"endDate": "2023-10-10"
	},
]

const taskList = document.getElementById("taskList")

// task making class
class Task {
	constructor(title, status, priority, startDate, endDate) {
	this.title = title;
	this.status = status;
	this.priority = priority;
	this.startDate = startDate;
	this.endDate = endDate;
	this.printTask();
	}

	printTask() {
		const newTask = document.createElement("div");
		newTask.classList.add("task");
		// заголовок задачи
		const title = document.createElement("h3");
		title.textContent = `Заголовок: ${this.title}`;
		title.classList.add("h3");
		newTask.appendChild(title);
		// task options
		const taskOptions = document.createElement("div");
		taskOptions.classList.add("task-options");
		newTask.appendChild(taskOptions);
		// options > priority
		const priority = document.createElement("div");
		priority.textContent = `приоритет: ${this.priority}`;
		taskOptions.appendChild(priority);
		// options > status
		const status = document.createElement("div");
		status.textContent = `статус: ${this.status}`;
		taskOptions.appendChild(status);
		// task dates
		const taskDates = document.createElement("div");
		taskDates.classList.add("task-dates");
		newTask.appendChild(taskDates);
		// dates > start date
		const startDate = document.createElement("div");
		startDate.textContent = `дата начала: ${this.startDate}`;
		taskDates.appendChild(startDate);
		// options > status
		const endDate = document.createElement("div");
		endDate.textContent = `дата окончания: ${this.endDate}`;
		taskDates.appendChild(endDate);
	console.log(`i made task ${this.taskText}`);
	taskList.appendChild(newTask);
	}
}

const getTasks = function() {
	for (let task of tasks) {
		const newTask = new Task(task.title, task.status, task.priority, task.startDate, task.endDate);
	}
}

getTasks();

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
// setInterval(updateClock, 1000);

// making time counter in footer
const counter = document.getElementById('counter');
const start = moment();
function calculateTime () {
        const end = moment();
        let seconds = Math.round((end - start) / 1000);
		let minutes = 0;
		let hours = 0;
		if (seconds>60) {
			minutes = Math.round(seconds/60);
			seconds = seconds%60;
		}
		if (minutes>60) {
			hours = Math.round(minutes/60);
			minutes = Math.round(seconds/60);
			seconds = seconds%60;
		}
		let timeSpent = `${hours} часов ${minutes} минут ${seconds} секунд`
		counter.textContent = timeSpent;
    };

// setInterval(calculateTime, 1000);

// note to self: правильно было бы реализовать возможность добавления и изменения задач пользователем, но не успеваю за одну неделю, и задание скорее на отработку подключения модулей. там потянется обработка некорректного ввода, вывод ошибок, обновление массива и обновление вывода на страницу.