const button = document.querySelector('#button');

const result = document.querySelector('#result');



const calculateBMI = (weight, height) => {
    weight = document.querySelector('#weight').value;
    height = document.querySelector('#height').value;
    if (weight <= 0 || weight >= 600) {
        result.innerHTML = "пожалуйста, введите вес в килограммах";
    } else if (height <=0 || height >=3) {
        result.innerHTML = "пожалуйста, введите рост в метрах";
    } else {
        bmi = (weight / Math.pow(height, 2)).toFixed(2);
        result.innerHTML = "индекс массы тела равен " + bmi;
        return bmi;
    }
};

button.addEventListener('click', calculateBMI);
