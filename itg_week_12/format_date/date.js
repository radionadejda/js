const button = document.querySelector('#button');
const resultDate = document.querySelector('#formatted');
const input = document.querySelector('#datetime');

const formatDate = (inputDate) => {
    inputDate = new Date (input.value);
    const currentDate = new Date();
    let timeDifference = 0;
    if ((inputDate - currentDate)>=1000) {
        timeDifference = inputDate - currentDate;
        message = "до события осталось ";
    } else if ((currentDate - inputDate)>=1000) {
        timeDifference = currentDate - inputDate;
        message = "после события прошло ";
    } else {
        message = "прямо сейчас";
        resultDate.textContent = message;
        return;
    }
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    resultDate.textContent = message + days + " дней, " + hours + " часов, " + minutes + " минут, " + seconds + " секунд.";
    input.value = "2023-08-04T14:00";
};

button.addEventListener("click", formatDate);