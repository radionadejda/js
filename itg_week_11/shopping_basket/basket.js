
const calcTotal = () => {
    const itemPrice = document.querySelectorAll('.card__price');
    let totalSum = 0;
    itemPrice.forEach(function(priceElem) {
        const price = parseFloat(priceElem.textContent);
        totalSum += price;
        console.log(totalSum);
    });
    const sum = document.querySelector('#sum');
    sum.textContent = `Итого: ${totalSum} рублей`;
};

calcTotal();

discount.addEventListener('click', calcDiscount);

const calcDiscount = () => {
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
};