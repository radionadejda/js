const message = document.querySelector('#message');
const resultLastName = document.querySelector('#last_name');
const resultFirstName = document.querySelector('#first_name');
const resultMiddleName = document.querySelector('#middle_name');
const button = document.querySelector('#button');
let print = () => {
    const input = document.querySelector('#input');
    let result = input.value.trim();
    result = result.replace(/\s\s+/g, ' ');
    const patternName = /^([а-яА-Я ])+$/;
    if (!patternName.test(result)) {
        message.textContent = "вводимые данные могут содержать только буквы кириллицы";
    } else {
        result = result.split(" ");
        if (result.length != 3) {
            message.textContent = "введите фамилию, имя и отчество через пробел";
        } else {
            for (let i = 0; i <= result.lenth; i++) {
                result[i] =  result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();
            };
            resultLastName.textContent += " " + result[0];
            resultFirstName.textContent += " " + result[1];
            resultMiddleName.textContent += " " + result[2];
            input.value = "";
        }
    }
};

button.addEventListener("click", print);