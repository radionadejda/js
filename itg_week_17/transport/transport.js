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
	}
];

class Transport {
	constructor(type, price, brand) {
		(this.type = type), (this.price = price), (this.brand = brand);
	}

	getInfo() {
		let info = `${this.type} ${this.brand}`;
		console.log(info);
		return info;
	}

	getPrice() {
		let price = `${this.type} ${this.brand} стоит ${this.price}`;
		console.log(price);
		return this.price;
	}
}

class Car extends Transport {
	constructor(type, price, brand, doors) {
		super(type, price, brand, doors);
		this.doors = doors;
	}
	getDoorsCount() {
		let doors = `автомобиль ${this.brand} имеет ${this.doors} двери`;
		console.log(doors);
		return this.doors;
	}
}
class Bike extends Transport {
	constructor(type, price, brand, maxSpeed) {
		super(type, price, brand);
		this.maxSpeed = maxSpeed;
	}

	getMaxSpeed() {
		let speed = `Максимальная скорость мотоцикла ${this.brand}: ${this.maxSpeed}`;
		console.log(speed);
		return this.maxSpeed;
	}
}

data.forEach(item => {
	if (item.type === "car") {
		let newCar = new Car("автомобиль", item.price, item.brand, item.doors);
		newCar.getInfo();
		newCar.getDoorsCount();
		newCar.getPrice();
	} else if (item.type === "bike") {
		let newBike = new Bike("мотоцикл", item.price, item.brand, item.maxSpeed);
		newBike.getInfo();
		newBike.getMaxSpeed();
		newBike.getPrice();
	} else {
		// на тот случай, если в массиве появится неопределенный элемент
        let newTransport = new Transport("транспортное средство", item.price, item.brand);
		newTransport.getInfo();
		newTransport.getPrice();
	}
});