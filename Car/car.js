var dreamCar = {
    make: "Oldsmobile",
    model: "97",
    color: "green",
    year: 1985,
    bodyStyle: "Luxury Car",
    price: 5500,
};

alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;