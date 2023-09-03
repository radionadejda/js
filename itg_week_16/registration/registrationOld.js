const submit = document.getElementById("submit");
const form = document.getElementById("form");
const messageDiv = document.getElementById("message");
const firstName = document.getElementById("firstname");
// const firstNameError = document.getElementById("firstNameError")
form.addEventListener("submit", function(event) {
	event.preventDefault();
	const firstNameValue = firstName.value.trim();
	const lastName = document.getElementById("lastname").value.trim();
	const email = document.getElementById("email").value.trim();
	const age = document.getElementById("age").value;
	const phone = document.getElementById("phone").value.trim();
	const job = document.getElementById("job").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("password_repeat").value;
	const termsAgree = document.getElementById("terms__yes");
	const termsDeny = document.getElementById("terms__no");
	const patternName = /^([a-zA-Zа-яА-Я]+-)?[a-zA-Zа-яА-Я]+$/;
	const patternEmail = /^[a-zA-Zа-яА-Я.-_]+@[a-zA-Zа-яА-Я]+\.[a-zA-Zа-яА-Я]+$/;
	const patternPhone = /^\+\d{1,2} \d{10}$/;
	const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,20}$/;
	if (!patternName.test(firstNameValue)) {
		showMessage('поле "имя" может содержать только буквы и дефис');
		// firstName.classList.add("error");
		// firstNameError.textContent = 'заполните поле "имя"'
	} else if (!patternName.test(lastName)) {
		showMessage('поле "фамилия" может содержать только буквы и дефис');
	} else if (!patternEmail.test(email)) {
		showMessage("Введите корректный email");
	} else if (age === "") {
		showMessage("Введите возраст");
	} else if (!patternPhone.test(phone)) {
		showMessage("Введите корректный номер телефона в формате +7 1234567890");
	} else if (job === "") {
		showMessage("Выберите профессию");
	} else if (termsDeny.checked) {
		showMessage("Для регистрации требуется ознакомиться и принять условия пользовательского соглашения");
	} else if (!patternPassword.test(password)) {
		showMessage("Введите корректный пароль");
	} else if (!patternPassword.test(passwordRepeat)) {
		showMessage("Введите повтор пароля");
	} else if (password !== passwordRepeat) {
		showMessage("Ваш пароль не совпадает");
	} else if (!termsAgree.checked) {
		showMessage("Для регистрации требуется ознакомиться и принять условия пользовательского соглашения");
	} else {
		showMessage("добро пожаловать, " + firstName + "!");
		form.reset();
	}
});

const showMessage = text => {
	messageDiv.textContent = text;
};
