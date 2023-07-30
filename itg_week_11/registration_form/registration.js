//
//     console.log(hasNumber.test(firstName));
//     console.log((/^[a-zA-Z]+$/.test(firstName)));

// else
// console.log('Форма отправлена');

const submit = document.getElementById("submit");
const form = document.getElementById("form");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	const firstName = document.getElementById("first_name").value.trim();
	const lastName = document.getElementById("last_name").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const termsAgree = document.getElementById("terms__yes");
	const termsDeny = document.getElementById("terms__no");
	const patternName = /^([a-zA-Zа-яА-Я]+-)?[a-zA-Zа-яА-Я]+$/;
	const patternEmail = /^[a-zA-Zа-яА-Я.-_]+@[a-zA-Zа-яА-Я]+\.[a-zA-Zа-яА-Я]+$/;
	const patternPhone = /^\+\d{1,2} \d{10}$/;
	if (!patternName.test(firstName)) {
		showMessage("Имя может содержать только буквы и дефис");
	} else if (!patternName.test(lastName)) {
		showMessage("Фамилия может содержать только буквы и дефис");
	} else if (!patternEmail.test(email)) {
		showMessage("Введите корректный email");
	} else if (!patternPhone.test(phone)) {
		showMessage("Введите корректный номер телефона в формате +7 1234567890");
	} else if (termsDeny.checked) {
		showMessage("Для регистрации требуется ознакомиться и принять условия пользовательского соглашения");
	} else if (!termsAgree.checked) {
		showMessage("Для регистрации требуется ознакомиться и принять условия пользовательского соглашения");
	} else {
		showMessage("добро пожаловать, " + firstName +"!");
		form.reset();
	}
});

function showMessage(text) {
	messageDiv.textContent = text;
}
