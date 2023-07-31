
// Вариант 1
// const body = document.querySelector("#body");
// document.getElementById("switcher").addEventListener("change", function() {
// 	const selectedTheme = this.value;
// 	body.className = "";
// 	body.classList.add(selectedTheme);
// });

// Вариант 2
const setTheme = (theme) => {
	const body = document.querySelector("#body");
	if (theme === "light") {
		body.style.backgroundColor = "#f9f9f9";
		body.style.color = "#003366";
	} else if (theme === "dark") {
		body.style.backgroundColor = "#333";
		body.style.color = "#faebd7";
	} else if (theme === "blue") {
		body.style.backgroundColor = "#cce0ff";
		body.style.color = "#096d58";
	}
};
document.getElementById("switcher").addEventListener("change", function() {
	const selectedTheme = this.value;
	setTheme(selectedTheme);
	});
