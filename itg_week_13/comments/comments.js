const button = document.querySelector("#button");
const comments = document.querySelector("#comments");
const userName = document.querySelector("#name");
const avatar = document.querySelector("#avatar");
const message = document.querySelector("#message");

// почему нельзя было сделать радиокнопки? Т_Т
const nameCheckboxYes = document.querySelector("#name_yes");
const nameCheckboxNo = document.querySelector("#name_no");

let addComment = () => {
	// создает новый див для комментария, присваивает ему класс
	let newComment = document.createElement("div");
	newComment.classList.add("comment");
	// это спам фильтр
	const spamFilter = /viagra|xxx|otherbadword/gi;
	// создает новый параграф для имени, присваивает ему класс
	let newName = document.createElement("p");
	newName.classList.add("comment__name");
	// проверяет и делает имя, которое будет отображаться в комментарии
	let nameTransform = userName.value;
	if (nameCheckboxNo.checked && nameCheckboxYes.checked) {
		alert(`выберите один вариант`);
        return;
	} else if (nameCheckboxNo.checked) {
		nameTransform = "username";
		newName.textContent = nameTransform;
	} else if (nameCheckboxYes.checked) {
		if (nameTransform.indexOf(" ") !== -1) {
		// if (nameTransform.includes(" ")) {
			alert(`поле "имя" не может содержать пробел`);
			return;
		} else if (nameTransform === "") {
			alert(`поле "имя" не может быть пустым`);
			userName.value = "Маша";
			return;
		} else if (spamFilter.test(nameTransform)) {
			nameTransform = nameTransform.replace(spamFilter, "***");
			nameTransform = nameTransform.charAt(0).toUpperCase() + nameTransform.slice(1).toLowerCase();
			newName.textContent = nameTransform;
		} else {
			nameTransform = nameTransform.charAt(0).toUpperCase() + nameTransform.slice(1).toLowerCase();
			newName.textContent = nameTransform;
		}
	} else {
		alert(`выберите один вариант`);
        return;
	}

// создает новый элемент для аватара, присваивает ему класс
	let newAvatar = document.createElement("img");
    newAvatar.classList.add("comment__avatar");
    if (avatar.value) {
        newAvatar.setAttribute("src", avatar.value);
    } else {
    const avatars = [
        './assets/img/cat1.jpg',
        './assets/img/cat2.jpg',
        './assets/img/cat3.jpg',
        './assets/img/cat4.jpg',
        './assets/img/cat5.jpg',
        './assets/img/cat6.jpg',
];
        const randomIndex = Math.floor(Math.random() * avatars.length);
        const randomAvatar = avatars[randomIndex];
        newAvatar.setAttribute("src", randomAvatar);
    }

// делает дату
    let newDate = document.createElement("p");
	newDate.classList.add("comment__date");
    let commentDate = new Date().toLocaleString('ru-RU', {weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit", year: "numeric", month: "long", day: "numeric"});
    newDate.innerHTML = commentDate;

// создает новый параграф для текста комментария, присваивает ему класс
	let newMessage = document.createElement("p");
	let messageText = message.value;
	if (messageText === "" || !messageText.replace(/\s/g, "").length) {
		alert(`поле "сообщение" не может быть пустым`);
		return;
	} else if (spamFilter.test(messageText)) {
		messageText = messageText.replace(spamFilter, "***");
		newMessage.classList.add("comment__text");
		newMessage.textContent = messageText;
	} else {
		newMessage.classList.add("comment__text");
		newMessage.textContent = messageText;
	}

// собирает все вместе и постит
	newComment.append(newAvatar, newDate, newName, newMessage);
	comments.append(newComment);
// обнуляет форму
    userName.value = "Маша";
	message.value = "";
    avatar.value = "";
};

button.addEventListener("click", addComment);