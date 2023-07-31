// вариант со значениями по умолчанию

// let calculateTotalPrice = (quantity = 2, price = 15000000) => {
//     let result = quantity*price;
//     let local = result.toLocaleString();
//     // alert("Стоимость покупки: "+ local +" рублей");
//     let div = document.createElement('div');
//     div.className = "total";
//     div.innerHTML = "Стоимость покупки: "+ local +" рублей";
//     document.body.append(div);
// };

// Вариант со значениями, введенными пользователем

let calculateTotalPrice = () => {
    let quantity = Number(prompt('введите количество', 2));
    let price = Number(prompt('введите стоимость', 15000000));
    let result = quantity*price;
    if (isNaN(result) || result <=0) {
        // alert("что-то пошло не так ☹, попробуйте ввести положительное число");
        let div = document.createElement('div');
        div.className = "error";
        div.innerHTML = "что-то пошло не так ☹, попробуйте ввести положительное число";
        document.body.append(div);
    } else {
        let local = result.toLocaleString();
        // alert("Стоимость покупки: "+ local +" рублей");
        let div = document.createElement('div');
        div.className = "total";
        div.innerHTML = "Стоимость покупки: "+ local +" рублей";
        document.body.append(div);
    }
};
