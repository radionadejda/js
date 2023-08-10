const button = document.querySelector("#button");
const answer = document.querySelector("#answer");

const isLeapYear = () => {
	const year = Number(document.querySelector("#year").value);
	let message = `узнать`;
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				message = `${year} - високосный год и в нем 366 дней`;
			} else {
				message = `${year} - не високосный год и в нем 365 дней`;
			}
		} else {
			message = `${year} - високосный год и в нем 366 дней`;
		}
	} else {
		message = `${year} - не високосный год и в нем 365 дней`;
	}
	answer.textContent = message;
};

button.addEventListener("click", isLeapYear);
