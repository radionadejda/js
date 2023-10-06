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
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

class Task {
	constructor(taskText) {
	this.taskText = taskText;
	this.done = false;
	this.printTask(); //Вызываем метод print при создании объекта
	}

	printTask() {
		const newTaskItem = document.createElement("label");
		newTaskItem.classList.add("task");
		newTaskItem.innerHTML = `
		<p>${this.taskText}</p>
		<input type="checkbox" name="task-checkbox"  unchecked class="checkbox"/>`;
		const checkbox = newTaskItem.querySelector(".checkbox");
		checkbox.addEventListener("change", () => {
		this.done = checkbox.checked;
		localStorage.setItem("tasks", JSON.stringify(tasks));
		});
		taskList.appendChild(newTaskItem);
		taskInput.value = "";
	}
}

const getTasks = function() {
	for (let task of tasks) {
		new Task(task.taskText);
	};
	buttonClearAllEnable();
};

let buttonClearAllEnable = function() {
	if (tasks.length !== 0) {
		buttonClearAll.disabled = false;
		success.style.display = "none";
	} else {
		buttonClearAll.disabled = true;
		success.style.display = "block";
	}
};



const clearAll = function() {
	let tasksOnPage = taskList.querySelectorAll(".task");
	tasksOnPage.forEach(task => task.remove());
	tasks.length = 0;
	window.localStorage.removeItem("tasks")
	buttonClearAllEnable();
}

if (tasks.length !== 0) {
	getTasks()
} else {
	clearAll()
}

// проверяет ввод и добавляет задачу
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
		buttonClearAllEnable();
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

// удалить все задачи
buttonClearAll.addEventListener("click", clearAll);
