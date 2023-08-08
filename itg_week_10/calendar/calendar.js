const button = document.querySelector(#button);
const answer = document.querySelector(#answer);

const isLeapYear = () => {
 const year = Number(document.querySelector(#year).value);
 let message = `Find out!`
 if (year%4 === 0) {
    if (year%100 === 0) {
      if (year%400 === 0) {
         message = `${year} is a leap year and has 366 days`
      } else {message = `${year} is not a leap year and has 365 days`}
    } else {message = `${year} is a leap year and has 366 days`} 
 } else {message = `${year} is not a leap year and has 365 days`};
 answer.innerHTML = message;
}

button.addEventListener('click', isLeapYear);

