
const list = document.querySelector("#todo__list");
const input = document.querySelector("#task");

const addTask = () => {
	const newTask = document.createElement("li");
	newTask.classList.add("new-task");
	if (input.value === "") {
		alert(`введите задание`)
	} else {
	newTask.textContent = input.value;
	list.append(newTask);
	input.value = "";
	}
};

document.querySelector("#button-add").onclick = addTask;

list.addEventListener("click", function(done) {
	if (done.target.classList.contains("new-task")) {
		done.target.classList.toggle("done");
	}
});
