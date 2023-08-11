const button = document.querySelector("#button");
const resultDate = document.querySelector("#formatted");
const error = document.querySelector("#error");
const input = document.querySelector("#birthday");

const formatDate = () => {
	const inputDate = new Date(input.value);
	const currentDate = new Date();
	const oneDay = 1000 * 60 * 60 * 24;
	let timeDifference = 0;
	let message = "";
	let formatDay = "";
	inputDate.setHours(0, 0, 0, 0);
	currentDate.setHours(0, 0, 0, 0);

	if (!input.value) {
		error.textContent = "укажите дату дня рождения";
		error.style.color = "red";
		return;
	}

	if (inputDate > currentDate) {
		timeDifference = inputDate - currentDate;
		let days = Math.floor(timeDifference / oneDay);
		message = "до дня рождения ";
		last_num = days % 10;
		days = Math.abs(days);
		if (days > 10 && [11, 12, 13, 14].includes(days % 100)) {
			formatDay = "осталось " + days + " дней";
		} else if (last_num === 1) {
			formatDay = "осталcя " + days + " день";
		} else if ([2, 3, 4].includes(last_num)) {
			formatDay = "осталось " + days + " дня";
		} else if ([5, 6, 7, 8, 9, 0].includes(last_num)) {
			formatDay = "осталось " + days + " дней";
		}
	} else if (inputDate < currentDate) {
		timeDifference = currentDate - inputDate;
		let days = Math.floor(timeDifference / oneDay);
		message = "после дня рождения ";
		last_num = days % 10;
		days = Math.abs(days);
		if (days > 10 && [11, 12, 13, 14].includes(days % 100)) {
			formatDay = "прошло " + days + " дней";
		} else if (last_num === 1) {
			formatDay = "прошел " + days + " день";
		} else if ([2, 3, 4].includes(last_num)) {
			formatDay = "прошло " + days + " дня";
		} else if ([5, 6, 7, 8, 9, 0].includes(last_num)) {
			formatDay = "прошло " + days + " дней";
		}
	} else {
		message = "сегодня день рождения!";
		resultDate.textContent = message;
		return;
	}

	// перезаписывает результат в один параграф
	resultDate.textContent = message + formatDay;

    // добавляет новый параграф с каждым новым результатом
// const newResult = document.createElement("p");
// newResult.textContent = input.value;
// resultDate.append(newResult);
// newResult.textContent = message + days + " дней ";
};

button.addEventListener("click", formatDate);

const clear = () => {
	location.reload();
};
document.querySelector("#clear").onclick = clear;

