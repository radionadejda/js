// 2. Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:
// - создать класс Transport, у него есть свойства: type, price, brand и два метода `getInfo()` и `getPrice()` ;
// - создать класс Car, который наследует от Transport. Этот класс должен содержать метод `getDoorsCount()` , который возвращает количество дверей;
// - создать класс Bike, который наследует от Transport. Этот класс должен содержать метод `getMaxSpeed()`, который возвращает максимальную скорость мотоцикла.

const data = [
	{
		id: 1,
		type: "car",
		brand: "Audi",
		doors: 4,
		price: 4300000,
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg"
	},
	{
		id: 2,
		type: "car",
		brand: "Mercedes-Benz",
		doors: 4,
		price: 2800000,
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg"
	},
	{
		id: 3,
		type: "bike",
		brand: "Harley-Davidson",
		maxSpeed: 210,
		price: 1300000,
		image: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg"
	},
	{
		id: 4,
		type: "bike",
		brand: "Harley-Davidson",
		maxSpeed: 220,
		price: 1400000,
		image: "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png"
	},
	// это чтобы проверить работает ли default
	// {
	// 	id: 5,
	// 	brand: "Harley-Davidson",
	// 	maxSpeed: 220,
	// 	price: 1400000,
	// 	image: "https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-d-green-bike-clipping-jpg-frame-of-a-swanky-green-electric-image_2665813.jpg"
	// }
];

class Transport {
	constructor(type, price, brand, image) {
		this.type = type,
		this.price = price,
		this.brand = brand,
		this.image = image
	}

	getInfo() {
		let info = `${this.type} ${this.brand}`;
		// console.log(info);
		return info;
	}

	getPrice() {
		let price = `${this.type} ${this.brand} стоит ${this.price}`;
		// console.log(price);
		return price;
	}
}

class Car extends Transport {
	constructor(type, price, brand, image, doors) {
		super(type, price, brand, image, doors);
		this.doors = doors;
	}
	getDoorsCount() {
		let doors = `автомобиль ${this.brand} имеет ${this.doors} двери`;
		// console.log(doors);
		return doors;
	}
}
class Bike extends Transport {
	constructor(type, price, brand, image, maxSpeed) {
		super(type, price, brand, image);
		this.maxSpeed = maxSpeed;
	}

	getMaxSpeed() {
		let speed = `Максимальная скорость мотоцикла ${this.brand}: ${this.maxSpeed} км/ч`;
		// console.log(speed);
		return speed;
	}
}

const addVehicle = () => {
data.forEach(item => {
	const catalogue = document.getElementById("catalogue");
	const newVehicle = document.createElement("div");
	newVehicle.classList.add("vehicle");
	catalogue.appendChild(newVehicle);
	const newImage = document.createElement("img");
	newImage.classList.add("image");
	const newTitle = document.createElement("h2");
	newTitle.classList.add("title");
	const newPrice = document.createElement("div");
	const newDescription = document.createElement("div");
	newVehicle.append(newImage, newTitle, newPrice, newDescription);
	switch (item.type) {
	case "car":
		let newCar = new Car("автомобиль", item.price, item.brand, item.image, item.doors);
		newImage.src = newCar.image;
		newTitle.textContent = newCar.getInfo();
		newDescription.textContent = newCar.getDoorsCount();
		newPrice.textContent = newCar.getPrice();
		break;
	case "bike":
		let newBike = new Bike("мотоцикл", item.price, item.brand, item.image, item.maxSpeed);
		newImage.src = newBike.image;
		newTitle.textContent = newBike.getInfo();
		newDescription.textContent = newBike.getMaxSpeed();
		newPrice.textContent = newBike.getPrice();
		break;
	default:
		// на тот случай, если в массиве появится неопределенный элемент
        let newTransport = new Transport("транспортное средство", item.price, item.brand, item.image);
		newImage.src = newTransport.image;
		newTitle.textContent = newTransport.getInfo();
		newPrice.textContent = newTransport.getPrice();
		break;
}
})
};
document.body.onload = addVehicle;
