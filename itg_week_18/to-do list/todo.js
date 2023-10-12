// 2. Создаём приложение «Планировщик задач».
// - В приложении должен быть input для ввода текста задачи и кнопка для её добавления в «Список задач»
// - Ниже должен быть «Список задач» и кнопка «Очистить список»
// - Когда задач нет, должно быть серое уведомление о том, что задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна
// - При добавлении задачи в список, каждая из них должна появляться в списке задач и напротив иметь неактивный чекбокс, а кнопка «Очистить список» должна быть активна
// - Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена)
// - При клике на кнопку «Очистить список» все задачи должны удаляться

//     **Важно: Для сохранения состояния списка задач между сеансами работы с приложением используйте Local Storage. Это позволит восстановить список задач при повторном открытии приложения.**



const taskInput = document.querySelector("#input");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonClearAll = document.querySelector("#buttonClearAll");
const buttonClearDone = document.querySelector("#buttonClearDone");
const taskList = document.querySelector("#tasks");
const success = document.querySelector("#success");
let taskText = taskInput;
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// класс для создания задач
class Task {
	constructor(taskText, done = false) {
	this.taskText = taskText;
	this.done = done;
	this.printTask();
	}

	printTask() {
		const newTaskItem = document.createElement("label");
		newTaskItem.classList.add("task");
		const taskTemplate = `<p>${this.taskText}</p>
		<input type="checkbox" name="task-checkbox"  ${this.done ? "checked" : ""} class="checkbox"/>`;
		newTaskItem.insertAdjacentHTML('beforeend', taskTemplate);
		const checkbox = newTaskItem.querySelector(".checkbox");
		checkbox.addEventListener("change", () => {
		this.done = checkbox.checked;
		localStorage.setItem("tasks", JSON.stringify(tasks));
		enableButtonClearDone();
	});
	taskList.appendChild(newTaskItem);
		taskInput.value = "";
	}

}

// выводим сохраненные задачи (печатаются за счет вызова метода print в классе)
const getTasks = function() {
	for (let task of tasks) {
		const newTask = new Task(task.taskText, task.done);
		const newTaskItem = taskList.lastChild;
    if (task.done) {
		const checkbox = newTaskItem.querySelector(".checkbox");
		checkbox.checked = true;
    }
	}
	applyCheckboxes();
	enableButtonClearAll();
	enableButtonClearDone();
};

// включает/выключает кнопку удалить все
const enableButtonClearAll = function() {
	if (tasks.length !== 0) {
		buttonClearAll.disabled = false;
		success.style.display = "none";
	} else {
		buttonClearAll.disabled = true;
		success.style.display = "block";
	}
};

// удаляет все
const clearAll = function() {
	let tasksOnPage = taskList.querySelectorAll(".task");
	tasksOnPage.forEach(task => task.remove());
	tasks.length = 0;
	window.localStorage.removeItem("tasks")
	enableButtonClearAll();
}

// запускает функцию удаления всех задач
buttonClearAll.addEventListener("click", clearAll);

// проверяет ввод пользователя и добавляет задачу
const addTask = function() {
	taskText = taskInput.value.trim();
	if (taskText === "") {
		taskInput.classList.add("error");
		return;
	} else {
		taskText = taskInput.value.trim();
		let newTask = new Task(taskText);
		tasks.push(newTask);
		localStorage.setItem("tasks", JSON.stringify(tasks));
		enableButtonClearAll();
	}
};

// убирает ошибку при вводе в инпут
taskInput.addEventListener("input", function() {
	taskInput.classList.remove("error");
});

// запускает функцию добавления задачи
buttonAdd.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
    buttonAdd.click();
	}
});



// вкл/выкл кнопку удаления выполненных задач
function enableButtonClearDone() {
	const checkboxes = document.querySelectorAll(".checkbox");
	for (const checkbox of checkboxes) {
	if (checkbox.checked) {
		buttonClearDone.disabled = false;
		return;
	} else {buttonClearDone.disabled = true;}
	}
	if (tasks.length == 0) {buttonClearDone.disabled = true;}
}

// удаляет выполненные задачи
function clearDoneTasks() {
	const checkboxes = document.querySelectorAll(".checkbox");
	for (const checkbox of checkboxes) {
	if (checkbox.checked) {
		const taskItem = checkbox.closest(".task");
		const index = tasks.findIndex(task => task.taskText === taskItem.textContent.trim());
		if (index !== -1) {
		tasks.splice(index, 1);
		taskItem.remove();
		}
	}
	}
	localStorage.setItem("tasks", JSON.stringify(tasks));
	enableButtonClearAll();
	enableButtonClearDone();
}

// запускает функцию удаления выполненных задач
buttonClearDone.addEventListener("click", clearDoneTasks);

// при загрузке проверяет, есть ли сохраненные задачи и выводит имеющиеся либо очищает все
window.onload = function() {
    if (tasks.length !== 0) {
		getTasks()
	} else {
		clearAll()
	}
}

function applyCheckboxes() {
const checkboxes = document.querySelectorAll(".checkbox");
	for (const checkbox of checkboxes) {
		checkbox.addEventListener("change", () => {
			const taskItem = checkbox.closest(".task");
			const index = tasks.findIndex(task => task.taskText === taskItem.textContent.trim());
			tasks[index].done = checkbox.checked;
			localStorage.setItem("tasks", JSON.stringify(tasks));
			enableButtonClearDone();
		});
	}
}