// change model options depending on car make
const brand = document.getElementById("brand");
const model = document.getElementById("model");
brand.addEventListener("change", updateModels);
function updateModels() {
	let selectedBrand = brand.value;
	model.innerHTML = "";
	switch (selectedBrand) {
		case "Renault":
			model.innerHTML = '<option value="">выберите марку машины</option><option value="Clio">Clio</option><option value="Megane">Megane</option>';
			break;
		case "Opel":
			model.innerHTML = '<option value="">выберите марку машины</option><option value="Astra">Astra</option><option value="Corsa">Corsa</option>';
			break;
		case "Mazda":
			model.innerHTML = '<option value="">выберите марку машины</option><option value="CX-5">CX-5</option><option value="Mazda3">Mazda3</option>';
			break;
		case "Jaguar":
			model.innerHTML = '<option value="">выберите марку машины</option><option value="XF">XF</option><option value="F-PACE">F-PACE</option>';
			break;
		default:
			break;
	}
}

// get brand function
let brandPrice = 0;
let selectedBrand = "";
function getBrand () {
selectedBrand = brand.value;
	if (selectedBrand === "Renault") {
		brandPrice = 1000000;
	} else if (selectedBrand === "Opel") {
		brandPrice = 1200000;
    } else if (selectedBrand === "Mazda") {
		brandPrice = 2000000;
    } else if (selectedBrand === "Jaguar") {
		brandPrice = 4000000;
    } else {
        brandPrice = 0;
		brandError.style.visibility = "visible";
	}
    brand.addEventListener("change", function() {
        brandError.style.visibility = "hidden";
    });
return brandPrice
}

// get model function
let modelPrice = 0;
let selectedModel = "";
let modelMultiplier = 1;
function getModel () {
    selectedModel = model.value;
        if (selectedModel === "Clio") {
            modelMultiplier = 1;
        } else if (selectedModel === "Megane") {
            modelMultiplier = 1.2;
        } else if (selectedModel === "Astra") {
            modelMultiplier = 1.3;
        } else if (selectedModel === "Corsa") {
            modelMultiplier = 1.4;
        } else if (selectedModel === "CX-5") {
            modelMultiplier = 1.6;
        } else if (selectedModel === "Mazda3") {
            modelMultiplier = 1.1;
        } else if (selectedModel === "XF") {
            modelMultiplier = 1.8;
        } else if (selectedModel === "F-PACE") {
            modelMultiplier = 1.7;
        } else if (selectedModel === ""){
            modelMultiplier = 0;
            modelError.style.visibility = "visible";
        }
        model.addEventListener("change", function() {
            modelError.style.visibility = "hidden";
        });
    return modelMultiplier
    }

// get fuel type function
let fuel = document.getElementsByName("fuel");
const fuelError = document.getElementById("fuelError");
let fuelMultiplier = 1;
let fuelValue = "";
function getFuel() {
	for (let i = 0; i < fuel.length; i++) {
		if (fuel[i].checked) {
			fuelValue = fuel[i].value;
			break;
		}
	}
	if (fuelValue === "petrol") {
		fuelMultiplier = 1;
	} else if (fuelValue === "diesel") {
		fuelMultiplier = 1.5;
	} else if (fuelValue === "gas") {
		fuelMultiplier = 1.3;
	} else if (fuelValue === "electric") {
		fuelMultiplier = 2.5;
	} else if (fuelValue === "hybrid") {
		fuelMultiplier = 2;
	} else {
		fuelMultiplier = 0;
		fuelError.style.visibility = "visible";
	}
	for (let i = 0; i < fuel.length; i++) {
		fuel[i].addEventListener("change", function() {
			fuelError.style.visibility = "hidden";
		});
	}
	return fuelMultiplier;
}

// get engine function
let engine = document.getElementById("engineVolume");
let engineMultiplier = 1;
let engineValue = "";
function getEngine() {
	engineValue = engine.value;
	if (engineValue !== "" && engineValue >= 1.1 && engineValue <= 3.5) {
		engineMultiplier = +engineValue;
	} else {
        engineMultiplier = 0;
		engineError.style.visibility = "visible";
	}
    engine.addEventListener("input", function() {
        engineError.style.visibility = "hidden";
    });
	return engineMultiplier;
}

// get condition and owners function
let condition = document.getElementsByName("condition");
const conditionError = document.getElementById("conditionError");
let conditionMultiplier = 1;
let conditionValue = "";
let owners = document.getElementsByName("owners");
const ownersError = document.getElementById("ownersError");
let ownersMultiplier = 1;
let ownersValue = "";

let ownersFieldset = document.getElementById("ownersFieldset")
let conditionUsed = document.getElementById("conditionUsed");
let conditionNew = document.getElementById("conditionNew");
conditionUsed.addEventListener("change", function() {
    ownersFieldset.disabled = false;
	ownersFieldset.classList.remove("hidden");
})
conditionNew.addEventListener("change", function() {
	ownersFieldset.disabled = true;
    ownersFieldset.classList.add("hidden");
    ownersError.style.visibility = "hidden";
})

function getCondition() {
	for (let i = 0; i < condition.length; i++) {
		if (condition[i].checked) {
			conditionValue = condition[i].value;
			break;
		}
	}
	if (conditionValue === "new") {
		conditionMultiplier = 1;
        // ownersFieldset.style.visibility = "hidden";
        // ownersError.style.visibility = "hidden";
	} else if (conditionValue === "used") {
		// conditionMultiplier = 0.5;
        for (let i = 0; i < owners.length; i++) {
            if (owners[i].checked) {
                ownersValue = owners[i].value;
                break;
            }
        }
    
        if (ownersValue === "few") {
            conditionMultiplier = 0.8;
        } else if (ownersValue === "many") {
            conditionMultiplier = 0.5;
        } else {
            ownersMultiplier = 0;
            conditionMultiplier = 0;
            ownersError.style.visibility = "visible";
        }
    
        for (let i = 0; i < owners.length; i++) {
            owners[i].addEventListener("change", function() {
                ownersError.style.visibility = "hidden";
            });
        }
	} else {
		conditionMultiplier = 0;
		conditionError.style.visibility = "visible";
	}
	for (let i = 0; i < condition.length; i++) {
		condition[i].addEventListener("change", function() {
			conditionError.style.visibility = "hidden";
		});
	}
	return conditionMultiplier;
}



// get payment method function
let payment = document.getElementsByName("payment");
const paymentError = document.getElementById("paymentError");
let paymentMultiplier = 1;
let paymentValue = "";
function getPayment() {
	for (let i = 0; i < payment.length; i++) {
		if (payment[i].checked) {
			paymentValue = payment[i].value;
			break;
		}
	}
	if (paymentValue === "card") {
		paymentMultiplier = 1.1;
	} else if (paymentValue === "cash") {
		paymentMultiplier = 1;
	} else if (paymentValue === "invoice") {
		paymentMultiplier = 1.3;
	} else {
		paymentMultiplier = 0;
		paymentError.style.visibility = "visible";
	}
	for (let i = 0; i < payment.length; i++) {
		payment[i].addEventListener("change", function() {
			paymentError.style.visibility = "hidden";
		});
	}
	return paymentMultiplier;
}

// one function to calculate them all
const totalPrice = document.getElementById("totalPrice");
const result = document.getElementById("result")
let price = 0;
function calculatePrice() {
    result.style.visibility = "hidden";
    price = Math.floor(getBrand()*getModel()*getFuel()*getEngine()*getCondition()*getPayment());
    console.log(price, getBrand(),getModel(),getFuel(),getEngine(),getCondition(),getPayment());

    if (price !== 0) {
    result.style.visibility = "visible";
    totalPrice.textContent = price + " рублей";
}
}

const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculatePrice);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
	document.location.reload();
});


// // this works if we don't have to display error message and make any of radio buttons checked by default in html
// function getCondition() {
// 	let condition = document.querySelector('input[name="condition"]:checked').value;
// 	if (condition === "new") {
// 		conditionMultiplier = 1;
// 	} else {
// 		conditionMultiplier = 0.5;
// 	}
// 	return conditionMultiplier;
// }