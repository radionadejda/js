
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

function addTask(task) {
    const newTask = document.createElement("div");
    newTask.classList.add("task")

    // заголовок задачи
    const taskText = document.createElement("p");
    taskText.textContent = `задача: ${task.title}`;
    taskText.classList.add("task-text")
    newTask.appendChild(taskText);

    // добавляем всю задачу на страницу
    dashboard.appendChild(newTask);
}

function postTasks (){
let taskTitleValue = document.getElementById("taskTitle").value;
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
        title: taskTitleValue,
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

