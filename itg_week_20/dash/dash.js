
// Определение данных:
// Допустим, у нас есть задачи для разных проектов. Каждая задача имеет:

// Название
// Статус (новая, в процессе, завершена)
// Приоритет (низкий, средний, высокий)
// Дату начала
// Дату завершения
// Тогда JSON может выглядеть так скрин 1
// Библиотеки:
// ChartJS: для графиков и диаграмм.
// Bootstrap: для стилизации и готовых компонентов интерфейса.
// И что нибудь свое
// Примерная структура страницы:
// График (ChartJS) показывающий распределение задач по статусам.
// График (ChartJS) показывающий распределение задач по приоритетам.
// Таблица (Bootstrap) со всеми задачами.
// JavaScript (dashboard.js):
// Здесь будет код, который загрузит данные из JSON, обработает их и отобразит в таблице и графиках. Тебе нужно будет сделать Fetch или AJAX-запрос к JSON (можешь использовать сервис типа jsonplaceholder для имитации сервера) и затем обработать данные для ChartJS.

const dashboard = document.getElementById("dashboard");
const taskTitle = document.getElementById("taskTitle");
const button = document.getElementById("button");
const taskPriority = document.getElementById("priority");
// const priorityHigh = document.getElementById("priorityHigh");
// const priorityMedium = document.getElementById("priorityMedium");
// const priorityLow = document.getElementById("priorityLow");
const taskStatus = document.getElementById("status");
// const statusEmpty = document.getElementById("statusEmpty");
// const statusInProcess = document.getElementById("statusInProcess");
// const statusDone = document.getElementById("statusDone");
// const statusHold = document.getElementById("statusHold");
// const statusCancelled = document.getElementById("statusCancelled");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const error = document.getElementById("error");

function addTask(task) {
    const newTask = document.createElement("div");
    newTask.classList.add("task")
    // заголовок задачи
    const taskText = document.createElement("h3");
    taskText.textContent = `задача: ${task.title}`;
    taskText.classList.add("task-text")
    newTask.appendChild(taskText);
    // опции задачи
    const taskOptions = document.createElement("div");
    taskOptions.classList.add("task-options")
    newTask.appendChild(taskOptions);
    // приоритет задачи
    const taskPriority = document.createElement("div");
    taskPriority.textContent = `приоритет: ${task.priority}`;
    taskPriority.classList.add("task-priority");
    taskOptions.appendChild(taskPriority);
    // статус задачи
    const taskStatus = document.createElement("div");
    taskStatus.textContent = `статус: ${task.status}`;
    taskStatus.classList.add("task-status");
    taskOptions.appendChild(taskStatus);
    // даты задачи
    const taskDates = document.createElement("div");
    taskOptions.classList.add("task-dates")
    newTask.appendChild(taskDates);
    // дата начала
    const startDate = document.createElement("div");
    startDate.textContent = `дата начала: ${task.startDate}`;
    startDate.classList.add("task-date");
    taskDates.appendChild(startDate);
    // дата окончания
    const endDate = document.createElement("div");
    endDate.textContent = `дата окончания: ${task.endDate}`;
    endDate.classList.add("task-date");
    taskDates.appendChild(endDate);
    // добавляем всю задачу на страницу
    dashboard.appendChild(newTask);
}

//получить приоритет задачи с радиокнопки
function checkPriority() {
    let priorityValue = ""
	const priorityOptions = taskPriority.querySelectorAll(".radio");
	for (let option of priorityOptions) {
		if (option.checked) {
			priorityValue = option.value;
			return priorityValue
		}
	};
    if (priorityValue == "" || priorityValue == undefined){
        error.style.display = "flex";
        return false;
    } else {
        error.style.display = "none"
        return true
    }
}

// проверить заголовок
function checkTitle() {
    const taskTitleValue = taskTitle.value;
    if (taskTitleValue == "" || taskTitleValue == undefined) {
        error.style.display = "flex";
        return false;
    } else {
        error.style.display = "none"
        return true
    }
}



function postTasks (){
const taskTitleValue = taskTitle.value;
const taskPriorityValue = checkPriority();
const taskStatusValue = taskStatus.value;
const taskStartDateValue = startDate.value;
const taskEndDateValue = endDate.value;
checkTitle()
if (!checkTitle()) {return}
if (!checkPriority()) {return}
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
        title: taskTitleValue,
        priority: taskPriorityValue,
        status: taskStatusValue,
        startDate: taskStartDateValue,
        endDate: taskEndDateValue
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => addTask(json))
    .catch((error) => {
        console.error("Ошибка", error);
    });
}

button.addEventListener('click', postTasks);

