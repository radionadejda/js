// Напишите класс cat со свойствами: кличка питомца, ваше имя, телефон, email, порода котика, чем питается, пол животного, комментарий владельца, фото котика по нажатию на кнопку ok создайте экземпляр этого класса заполнив его свойства ответами из опросника
class Cat {
	constructor(petName, humanName, phone, email, breed, food, petSex, comments, photo) {
		this.petName = petName;
		this.humanName = humanName;
		this.phone = phone;
		this.email = email;
		this.breed = breed;
		this.food = food;
		this.petSex = petSex;
		this.comments = comments;
		this.photo = photo;
	}
}

	const catForm = document.getElementById("catForm");
	catForm.addEventListener("submit", function(event) {
		event.preventDefault();
		const petName = document.getElementById("petName").value;
		const humanName = document.getElementById("humanName").value;
		const phone = document.getElementById("phone").value;
		const email = document.getElementById("email").value;
		const breed = document.querySelector("select").value;
		const food = [];
		const dryFood = document.getElementById("dryfood").checked;
		const wetFood = document.getElementById("wetfood").checked;
		const naturalFood = document.getElementById("naturalfood").checked;
		//добавляемый выбранный корм в массив
		if (dryFood) {
			food.push("сухой корм");
		}
		if (wetFood) {
			food.push("влажный корм");
		}
		if (naturalFood) {
			food.push("натуральный корм");
		}

		const petSex = document.querySelector('input[name="sex"]:checked').value;
		const comments = document.querySelector("textarea").value;
		const photo = document.querySelector('input[type="file"]').value;

		let cat = new Cat(petName, humanName, phone, email, breed, food, petSex, comments, photo);
		console.log(cat);
	});
