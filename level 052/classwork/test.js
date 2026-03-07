const carsContainer = document.getElementById("carsContainer");

const renderCars = () => {
  carsContainer.innerHTML = "";

  manager._cars.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <h3>${car.brand} ${car.model}</h3>
      <p>Year: ${car.year}</p>
      <p>Price: $${car.price}</p>
      <img src="${car.image}" width="150">
      <button>Delete</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      manager.deleteCar(index);
    });

    carsContainer.appendChild(card);
  });
};

class Car {
  constructor(brand, model, year, price, image) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.image = image;
  }
}

class CarManager {
  constructor() {
    this._cars = [];
  }

  addCar(brand, model, year, price, image) {
    const car = new Car(brand, model, year, price, image);
    this._cars.push(car);
    renderCars();
  }

  deleteCar(index) {
    this._cars.splice(index, 1);
    renderCars();
  }
}

const manager = new CarManager();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { brand, model, year, price, image } = form;

  manager.addCar(
    brand.value,
    model.value,
    year.value,
    price.value,
    image.value
  );

  form.reset();
});
