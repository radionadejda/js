class Worker {
	constructor(firstname, surname, rate, days) {
		this.firstname = firstname;
		this.surname = surname;
        this.rate = rate;
        this.days = days;
	}
    getSalary(){
		let salary = +this.rate * +this.days;
		return salary;
	}
}
const result = new Worker('Vasya','Ivanov','15','30');


console.log(result.getSalary());
