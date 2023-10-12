//     ... указать числовой идентификатор, он должен быть от 1 до 10 (так как для каждого списка в API всего по 10 сущностей):
// работает для всех сущностей в каждой категории
// films: 6 titles
// people: 83 names
// planets: 60 names
// species: 37 names
// starships: 17 names
// vehicles: 38 names

// ... В разметке HTML должно быть минимум два поля: в первое нужно выводить результат поиска, если данные пришли и всё хорошо, во втором — ошибку, если что-то пошло не так. Сообщения должны быть видны поочередно, если результат показан, ошибка должна быть сброшена. И наоборот.
// - ошибка или результат поиска выводятся в одном поле, перезаписываются

//  Обязательно добавьте обработчик ответа: если ответ успешный, следующий обработчик `then` получит объект ответа на вход, если с ответом что-то не так, отклоните промис (для этого верните `Promise.reject` с кодом статуса ответа). Блок `catch` и `finally` использовать обязательно.
// вот тут я нипоняль(( проверку ответа сделала, а отказ промиса не понимаю, где должен оказаться

//     Хороший интерфейс сообщает пользователю, что идёт загрузка надписью «Идёт загрузка» или крутящимся лоадером пока идёт запрос. Если хотите улучшить ваше приложение, то вы можете также реализовать этот функционал.

const button = document.getElementById("button");
const selector = document.getElementById("selector");
const result = document.getElementById("result");
const number = document.getElementById("number");

async function getStarWars() {
	const numberValue = number.value;
    const selectorValue = selector.value;
    result.innerHTML = '<p>ждем ответа от сервера...</p><img src="./style/cat_roll.gif" alt="cat_roll" class="img">';
    result.classList.remove("error");
	try {
        if (numberValue == "" || selectorValue =="") {
            throw new Error("empty");
        }
    const response = await fetch(`https://swapi.dev/api/${selectorValue}/${numberValue}/`);
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        let data = await response.json();
        let text = "";
        if (selectorValue == "films") {
            text = JSON.stringify(data.title).replace(/['"]+/g, '')
        } else {
        text = JSON.stringify(data.name).replace(/['"]+/g, '')
        }
        result.textContent = text;
} catch (error) {
    let text = ""
    if (error.message == "empty") {
        text = "введите данные для поиска"
    }
    if (error.message == 401) {
        text = `не авторизован (номер ошибки: ${error.message})`
    }
    if (error.message == 403) {
        text = `доступ запрещен (номер ошибки: ${error.message})`
    }
    if (error.message == 404) {
        text = `станица не найдена, попробуйте ввести другое число (номер ошибки: ${error.message})`
    }
    if (error.message == 500) {
        text = `внутренняя ошибка сервера, (номер ошибки: ${error.message})`
    }
        result.classList.add("error");
        result.textContent = `${text}`;
};
}

button.addEventListener("click", getStarWars);