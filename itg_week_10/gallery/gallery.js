let image = document.getElementById("gallery__img");

let nextImage = () => {
	if (image.src.match("cat1.jpg")) {
		image.src = "./assets/img/cat2.jpg";
	} else if (image.src.match("cat2.jpg")) {
		image.src = "./assets/img/cat3.jpg";
	} else if (image.src.match("cat3.jpg")) {
		image.src = "./assets/img/cat4.jpg";
	} else if (image.src.match("cat4.jpg")) {
		image.src = "./assets/img/cat5.jpg";
	} else if (image.src.match("cat5.jpg")) {
		image.src = "./assets/img/cat6.jpg";
	} else if (image.src.match("cat6.jpg")) {
		image.src = "./assets/img/cat7.jpg";
	} else if (image.src.match("cat7.jpg")) {
		image.src = "./assets/img/cat1.jpg";
	}
};

let previousImage = () => {
	if (image.src.match("cat1.jpg")) {
		image.src = "./assets/img/cat7.jpg";
	} else if (image.src.match("cat7.jpg")) {
		image.src = "./assets/img/cat6.jpg";
	} else if (image.src.match("cat6.jpg")) {
		image.src = "./assets/img/cat5.jpg";
	} else if (image.src.match("cat5.jpg")) {
		image.src = "./assets/img/cat4.jpg";
	} else if (image.src.match("cat4.jpg")) {
		image.src = "./assets/img/cat3.jpg";
	} else if (image.src.match("cat3.jpg")) {
		image.src = "./assets/img/cat2.jpg";
	} else if (image.src.match("cat2.jpg")) {
		image.src = "./assets/img/cat1.jpg";
	}
};
