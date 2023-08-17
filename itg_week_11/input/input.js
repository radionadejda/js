const button = document.querySelector("#button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const squareInput = () => {
    inputNumber = input.value;
    if (inputNumber === "" || inputNumber.includes(" ") || isNaN(inputNumber)) {
        output.value = "smth wrong";
    } else {
        output.value = inputNumber**2;
    }
};

button.addEventListener("click", squareInput);