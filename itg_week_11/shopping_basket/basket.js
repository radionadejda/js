
// document.querySelector('#sum');

// const plate = document.querySelector('#platePrice');
// let platePrice = Number(plate.textContent);
// plate.innerHTML = platePrice.toLocaleString() +" рублей";

// const jaguar = document.querySelector('#jaguarPrice');
// let jaguarPrice = Number(jaguar.textContent);
// jaguar.innerHTML = jaguarPrice.toLocaleString() +" рублей";

// const cabinet = document.querySelector('#cabinetPrice');
// let cabinetPrice = Number(cabinet.textContent);
// cabinet.innerHTML = cabinetPrice.toLocaleString() +" рублей";

// const teapot = document.querySelector('#teapotPrice');
// let teapotPrice = Number(teapot.textContent);
// teapot.innerHTML = teapotPrice.toLocaleString() +" рублей";


// const plate = document.querySelector('#platePrice');
// let platePrice = Number(plate.textContent);
// plate.innerHTML = platePrice;

// const jaguar = document.querySelector('#jaguarPrice');
// let jaguarPrice = Number(jaguar.textContent);
// jaguar.innerHTML = jaguarPrice;

// const cabinet = document.querySelector('#cabinetPrice');
// let cabinetPrice = Number(cabinet.textContent);
// cabinet.innerHTML = cabinetPrice;

// const teapot = document.querySelector('#teapotPrice');
// let teapotPrice = Number(teapot.textContent);
// teapot.innerHTML = teapotPrice;

function calcTotal() {
    const itemPrice = document.querySelectorAll('.card__price');
    let totalSum = 0;
    itemPrice.forEach(function(priceElem) {
        const price = parseFloat(priceElem.textContent);
        totalSum += price;
        console.log(totalSum);
    });
    const sum = document.querySelector('#sum');
    sum.textContent = `Итого: ${totalSum} рублей`;
}

calcTotal();

discount.addEventListener('click', calcDiscount);

function calcDiscount () {
    const itemPrice = document.querySelectorAll('.card__price');
    let discount = 0.2;
    itemPrice.forEach(function(priceElem) {
    let price = parseFloat(priceElem.textContent);
    const newPrice = price - (price*discount);
    priceElem.textContent = newPrice;
    console.log(newPrice);

    const itemPrice = document.querySelectorAll('.card__price');
    let totalSum = 0;
    itemPrice.forEach(function(priceElem) {
        const price = parseFloat(priceElem.textContent);
        totalSum += price;
        console.log(totalSum);
    });
    const sum = document.querySelector('#sum');
    sum.textContent = `Итого: ${totalSum} рублей`;
    document.querySelector('#discount').disabled = true;
});
}