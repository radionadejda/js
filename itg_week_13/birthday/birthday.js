const button = document.querySelector('#button');
const resultDate = document.querySelector('#formatted');
const error = document.querySelector('#error');
const input = document.querySelector('#birthday');

const formatDate = () => {
    const inputDate = new Date(input.value);
    const currentDate = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    let timeDifference = 0;
    let message = '';
    inputDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    if (!input.value) {
        error.textContent = "укажите дату дня рождения";
        error.style.color = 'red';
        return;
    } else if (inputDate > currentDate) {
        timeDifference = inputDate - currentDate;
        message = "до дня рождения осталось ";
    } else if (inputDate < currentDate) {
        timeDifference = currentDate - inputDate;
        message = "после дня рождения прошло ";
    } else {
        message = "сегодня день рождения!";
        resultDate.textContent = message;
        return;
    }
        const days = Math.floor(timeDifference / oneDay);


    // function dayTitle(number) {
    //     if (number > 10 && [11, 12, 13, 14].includes(number%100)) return 'дней';
    //     last_num = number%10;
    //     if (last_num == 1) return 'день';
    //     if ([2,3,4].includes(last_num)) return 'дня';
    //     if ([5,6,7,8,9, 0].includes(last_num)) return 'дней';
    // }

    // добавляет новый параграф с каждым результатом
    // const newResult = document.createElement("p");
	// newResult.textContent = input.value;
	// resultDate.append(newResult);
    // newResult.textContent = message + days + " дней ";

    // перезаписывает результат в один параграф
    resultDate.textContent = message + days + " дней ";

};

button.addEventListener("click", formatDate);

const clear = () => {
    location.reload();
};
document.querySelector('#clear').onclick = clear;
