const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let message;

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}`); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

// let result = parseInt(deposit)+parseInt(growth);
let result = (+deposit) + (+growth);
console.log(`К концу расчетного прирост составил ${growth} и на данный момент ваш депозит составляет ${result} руб`); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  let percent = 0.07;
  let year = parseFloat(parseFloat(sum)+parseFloat(sum*percent)).toFixed(2);
  total.textContent = (`Через год у вас будет ${year} на счету`);
  // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});
