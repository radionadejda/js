
const list = document.querySelector("#todo__list");
const input = document.querySelector("#task");

let addTask = () => {
	const newTask = document.createElement("p");
	newTask.classList.add("new-task");
	newTask.textContent = input.value;
	list.append(newTask);
	input.value = "";
};

document.querySelector("#button-add").onclick = addTask;

list.addEventListener("click", function(done) {
	if (done.target.classList.contains("new-task")) {
		done.target.classList.toggle("done");
	}
});
