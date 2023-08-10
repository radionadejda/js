const button = document.querySelector('#button');
const comments = document.querySelector("#comments");
const userName = document.querySelector("#name");
const avatar = document.querySelector("#avatar");
const message = document.querySelector("#message");

let addComment = () => {
    let newComment = document.createElement("div");
    newComment.classList.add("comment");
    const spamFilter = /viagra|xxx|otherbadword/gi;
    let newName = document.createElement("p");
    newName.classList.add("comment__name");
    let nameTransform = userName.value;
    if (nameTransform.indexOf(' ') !==-1) {
        alert(`поле "имя" не может содержать пробел`);
        return;
    } else if (nameTransform === "") {
        alert(`поле "имя" не может быть пустым`);
        userName.value = "Маша";
        return;
    } else if (spamFilter.test(nameTransform)) {
        nameTransform = nameTransform.replace (spamFilter, "***");
        nameTransform = nameTransform.charAt(0).toUpperCase() + nameTransform.slice(1).toLowerCase();
        newName.textContent = nameTransform;
    } else {
        nameTransform = nameTransform.charAt(0).toUpperCase() + nameTransform.slice(1).toLowerCase();
        newName.textContent = nameTransform;
    };

    let newAvatar = document.createElement("img");
        newAvatar.setAttribute('src', avatar.value);
        newAvatar.classList.add("comment__avatar");

    let newMessage = document.createElement("p");
    let messageText = message.value;
    if ((messageText === "") || (!messageText.replace(/\s/g, '').length)){
        alert(`поле "сообщение" не может быть пустым`);
        return;
    } else if (spamFilter.test(messageText)) {
        messageText = messageText.replace (spamFilter, "***");
        newMessage.classList.add("comment__text");
        newMessage.textContent = messageText;
    } else {
        newMessage.classList.add("comment__text");
        newMessage.textContent = messageText;
    };

	newComment.append(newAvatar, newName, newMessage);
	comments.append(newComment);
	userName.value = "Маша";
    message.value = ""
}

button.addEventListener('click', addComment);