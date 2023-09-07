//реализуйте класс валидатор который будет проверять строки. к примеру у него будет метод isemail который параметром принимает строку и проверяет является ли она корректным имейлом или нет, если является возвращает true иначе false кроме того класс будет иметь следующие методы метод isDomain для проверки домена метод isDate для проверки даты и метод isPhone для проверки телефона сделать две версии этого класса станадртная и статическая

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const domain = document.getElementById("domain");
const domainError = document.getElementById("domainError");
const date = document.getElementById("date");
const dateError = document.getElementById("dateError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

// this is static version
class Validator {
	static isEmail(input) {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		input = email.value;
		if (!emailRegex.test(input)) {
			emailError.textContent = "it's wrong";
		} else {
			emailError.textContent = "it's ok";
		}
		return emailRegex.test(input);
	}

	static isDomain(input) {
		const domainRegex = /^@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		input = domain.value;
		if (!domainRegex.test(input)) {
			domainError.textContent = "it's wrong";
		} else {
			domainError.textContent = "it's ok";
		}
		return domainRegex.test(input);
	}

	static isDate(input) {
		input = date.value;
		if (input === "") {
			dateError.textContent = "it's wrong";
		} else {
			dateError.textContent = "it's ok";
		}
		return input === "";
	}

	static isPhone(input) {
		const patternPhone = /^\+\d{1,2} \d{10}$/;
		input = phone.value;
		if (!patternPhone.test(input)) {
			phoneError.textContent = "it's wrong";
		} else {
			phoneError.textContent = "it's ok";
		}
		return patternPhone.test(input);
	}
}

email.addEventListener("blur", () => Validator.isEmail());
domain.addEventListener("blur", () => Validator.isDomain());
date.addEventListener("blur", () => Validator.isDate());
phone.addEventListener("blur", () => Validator.isPhone());

// this is standard version
class Validator2 {
	isEmail(input) {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		input = email.value;
		if (!emailRegex.test(input)) {
			emailError.textContent = "it's wrong";
		} else {
			emailError.textContent = "it's ok";
		}
		return emailRegex.test(input);
	}

	isDomain(input) {
		const domainRegex = /^@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		input = domain.value;
		if (!domainRegex.test(input)) {
			domainError.textContent = "it's wrong";
		} else {
			domainError.textContent = "it's ok";
		}
		return domainRegex.test(input);
	}

	isDate(input) {
		input = date.value;
		if (input === "") {
			dateError.textContent = "it's wrong";
		} else {
			dateError.textContent = "it's ok";
		}
		return input === "";
	}

	isPhone(input) {
		const patternPhone = /^\+\d{1,2} \d{10}$/;
		input = phone.value;
		if (!patternPhone.test(input)) {
			phoneError.textContent = "it's wrong";
		} else {
			phoneError.textContent = "it's ok";
		}
		return patternPhone.test(input);
	}
}

let v2 = new Validator2();

email.addEventListener("blur", () => v2.isEmail());
domain.addEventListener("blur", () => v2.isDomain());
date.addEventListener("blur", () => v2.isDate());
phone.addEventListener("blur", () => v2.isPhone());
