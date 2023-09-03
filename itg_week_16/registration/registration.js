const form = document.getElementById("form");

// check first name
const firstName = document.getElementById("firstname");
const firstNameError = document.getElementById("firstNameError");
firstName.addEventListener("input", checkName);
function checkName() {
	const firstNameValue = firstName.value.trim();
	// // check with regExp
	// const patternName = /^([a-zA-Zа-яА-Я]+-)?[a-zA-Zа-яА-Я]{2,20}$/;
	// if (!patternName.test(firstNameValue)) {
	// 	firstName.classList.add("error");
	// 	firstNameError.textContent = 'заполните поле "имя"'
	// } else {
	//     firstName.classList.remove("error");
	//     console.log(firstNameValue);
	//     return firstNameValue
	// }

	if (firstName.validity.tooShort) {
		let minlength = firstName.getAttribute("minlength");
		firstName.classList.add("error");
		firstNameError.textContent = `Минимальное значение не может быть меньше, чем  ${minlength}`;
	} else if (firstName.validity.tooLong) {
		let maxlength = firstName.getAttribute("maxlength");
		firstName.classList.add("error");
		firstNameError.textContent = `Максимальное значение не может быть больше, чем ${maxlength}`;
	} else if (firstName.validity.typeMismatch) {
		firstName.classList.add("error");
		firstNameError.textContent = 'поле "имя" может содержать только буквы и дефис';
	} else if (firstName.validity.patternMismatch) {
		firstName.classList.add("error");
		firstNameError.textContent = 'поле "имя" может содержать только буквы и дефис';
	} else if (firstName.validity.valueMissing) {
		firstName.classList.add("error");
		firstNameError.textContent = `поле "имя" не может быть пустым`;
	} else {
		firstNameError.textContent = "";
		firstName.classList.remove("error");
		console.log(firstNameValue);
		return firstNameValue;
	}
}

// check last name
const lastName = document.getElementById("lastname");
const lastNameError = document.getElementById("lastNameError");
lastName.addEventListener("input", checkLastName);
function checkLastName() {
	const lastNameValue = lastName.value.trim();
	let message = "";
	if (lastName.validity.tooShort) {
		let minlength = lastName.getAttribute("minlength");
		message = `Минимальное значение не может быть меньше, чем  ${minlength}`;
	} else if (lastName.validity.tooLong) {
		message = `Максимальное значение не может быть больше, чем ${maxlength}`;
	} else if (lastName.validity.typeMismatch) {
		lastNameError.textContent = 'поле "фамилия" может содержать только буквы и дефис';
	} else if (lastName.validity.patternMismatch) {
		message = 'поле "фамилия" может содержать только буквы и дефис';
	} else if (lastName.validity.valueMissing) {
		message = `поле "фамилия" не может быть пустым`;
	}

	if (!lastName.validity.valid) {
		lastName.classList.add("error");
		lastNameError.textContent = message;
	} else {
		lastNameError.textContent = "";
		lastName.classList.remove("error");
		console.log(lastNameValue);
		return lastNameValue;
	}
}

// check email
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
// email проверяется по изменению, а не по вводу, чтобы пользователь не получал сообщение об ошибке когда только начал вводить email
email.addEventListener("change", checkEmail);
function checkEmail() {
	const emailValue = email.value.trim();
	const patternEmail = /^[a-zA-Zа-яА-Я.-_]+@[a-zA-Zа-яА-Я]+\.[a-zA-Zа-яА-Я]{2,}$/;
	if (emailValue === "") {
		email.classList.add("error");
		emailError.textContent = `поле "email" не может быть пустым`;
	} else if (!patternEmail.test(emailValue)) {
		email.classList.add("error");
		emailError.textContent = `Поле email должно иметь формат mary@itgirls.org`;
	} else {
		emailError.textContent = "";
		email.classList.remove("error");
		console.log(emailValue);
		return emailValue;
	}
}

// check age
const age = document.getElementById("age");
const ageError = document.getElementById("ageError");
age.addEventListener("input", checkAge);
function checkAge() {
	const ageValue = age.value;
	let message = "";
	if (age.validity.rangeUnderflow) {
		let min = age.getAttribute("min");
		message = `Минимальный возраст не может быть меньше, чем  ${min}`;
	} else if (age.validity.rangeOverflow) {
		let max = age.getAttribute("max");
		message = `Максимальный возраст не может быть больше, чем ${max}`;
	} else if (age.validity.typeMismatch) {
		age.textContent = 'поле "возраст" может содержать только число';
	} else if (age.validity.stepMismatch) {
		message = `Введите количество полных лет`;
	} else if (age.validity.valueMissing) {
		message = `поле "возраст" не может быть пустым`;
	}

	if (!age.validity.valid) {
		age.classList.add("error");
		ageError.textContent = message;
	} else {
		ageError.textContent = "";
		age.classList.remove("error");
		console.log(ageValue);
		return ageValue;
	}
}
//check phone
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
phone.addEventListener("change", checkPhone);
function checkPhone() {
	const phoneValue = phone.value;
	const patternPhone = /^\+\d{1,2} \d{10}$/;
	if (phoneValue === "") {
		phone.classList.add("error");
		phoneError.textContent = `поле "номер телефона" не может быть пустым`;
	} else if (!patternPhone.test(phoneValue)) {
		phone.classList.add("error");
		phoneError.textContent = `Поле "номер телефона" должно иметь формат +7 1234567890`;
	} else {
		phoneError.textContent = "";
		phone.classList.remove("error");
		console.log(phoneValue);
		return phoneValue;
	}
}
//check job
const job = document.getElementById("job");
const jobError = document.getElementById("jobError");
job.addEventListener("input", checkJob);
function checkJob() {
	const jobValue = job.value;
	if (jobValue === "") {
		job.classList.add("error");
		jobError.textContent = `поле "профессия" не может быть пустым`;
	} else {
		jobError.textContent = "";
		job.classList.remove("error");
		console.log(jobValue);
		return jobValue;
	}
}
//check password
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
password.addEventListener("input", checkPassword);
function checkPassword() {
	const passwordValue = password.value;
	const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
	if (passwordValue === "") {
		password.classList.add("error");
		passwordError.textContent = `поле "пароль" не может быть пустым`;
	} else if (!patternPassword.test(passwordValue)) {
		password.classList.add("error");
		passwordError.textContent = `поле должно содержать не менее 8 символов, как минимум одну заглавную букву, одну строчную букву и одну цифру`;
	} else {
		passwordError.textContent = "";
		password.classList.remove("error");
		console.log(passwordValue);
		return passwordValue;
	}
}
//check passwordRepeat
const passwordRepeat = document.getElementById("password_repeat");
const passwordRepeatError = document.getElementById("passwordRepeatError");
passwordRepeat.addEventListener("input", checkPasswordRepeat);
function checkPasswordRepeat() {
	const passwordRepeatValue = passwordRepeat.value;
	const passwordValue = password.value;
	const patternPasswordRepeat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
	if (passwordRepeatValue === "") {
		passwordRepeat.classList.add("error");
		passwordRepeatError.textContent = `поле "повтор пароля" не может быть пустым`;
	} else if (!patternPasswordRepeat.test(passwordRepeatValue)) {
		passwordRepeat.classList.add("error");
		passwordRepeatError.textContent = `поле должно содержать не менее 8 символов, как минимум одну заглавную букву, одну строчную букву и одну цифру`;
	} else if (passwordRepeatValue !== passwordValue){
		passwordRepeat.classList.add("error");
		passwordRepeatError.textContent = `введенные пароли должны совпадать`;
	} else {
		passwordRepeatError.textContent = "";
		passwordRepeat.classList.remove("error");
		console.log(passwordRepeatValue);
		return passwordRepeatValue;
	}
}



const submit = document.getElementById("submit");
const termsAgree = document.getElementById("terms__yes");
const termsDeny = document.getElementById("terms__no");
const messageDiv = document.getElementById("message");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	checkName();
	checkLastName();
	checkEmail();
	checkAge();
	checkPhone();
	checkJob();
	checkPassword();
	checkPasswordRepeat();
	if (
	checkName()
	&& checkLastName()
	&& checkEmail()
	&& checkAge()
	&& checkPhone()
	&& checkJob()
	&& checkPassword()
	&& checkPasswordRepeat()
	&& termsAgree.checked) {
		showMessage(`добро пожаловать, ${firstName.value}!`);
		form.reset();
		messageDiv.classList.remove("errormessage");
		messageDiv.classList.add("label");
	} else {
		showMessage("Для регистрации требуется заполнить все обязательные поля и принять условия пользовательского соглашения");
	}
});

const showMessage = text => {
	messageDiv.textContent = text;
};
