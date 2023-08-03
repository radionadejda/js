const message = document.querySelector('#message');
const resultLastName = document.querySelector('#last_name');
const resultFirstName = document.querySelector('#first_name');
const resultMiddleName = document.querySelector('#middle_name');
const button = document.querySelector('#button');


let print = () => {
    const input = document.querySelector('#input');
    let result = input.value.trim();
    result = result.replace(/\s\s+/g, ' ');
    const patternName = /^([а-яА-Я- ])+$/;
    const patternDouble = /^([а-яА-Я-])+$/;
    // пробел в паттерне нужен, чтобы учитывать двойные имена (Анна-Мария), сложные отчества ( ...-оглы), двойные фамилии (Салтыков-Щедрин), но как учесть имена без дефиса это вопрос
    if (!patternName.test(result)) {
        message.innerHTML = "вводимые данные могут содержать только буквы кириллицы и дефис";
    } else {
        result = result.split(" ");
        if (result.length != 3) {
            message.innerHTML = "введите фамилию, имя и отчество через пробел";
        } else {
            let lastName = result[0];
            let firstName = result[1];
            let middleName = result[2];
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
            resultFirstName.textContent += " " + firstName;
            middleName = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
            resultMiddleName.textContent += " " + middleName;
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
            resultLastName.textContent += " " + lastName;
            input.value = "";
        }
        // if (patternDouble.test(result[0])) {
        //         let firstName = result[0];
        //         firstName = firstName.split("-");
        //         test.innerHTML = "вы должно быть из испании!";
        //         firstName.map (word => {
        //             const firstLetter = word.charAt(0).toUpperCase();
        //             const rest = word.slice(1).toLowerCase();
        //             return firstLetter + rest;
        //             });
        //         test.innerHTML = firstName.join("-");
    }
}

button.addEventListener("click", print);