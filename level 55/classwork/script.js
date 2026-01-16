const renderCars = (parent, cars) => {
    parent.innerHTML = '';

    cars.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';

        const title = document.createElement('h3');
        title.textContent = `${car.brand} ${car.model}`;
        card.appendChild(title);

        const year = document.createElement('p');
        year.textContent = `Year: ${car.year}`;
        card.appendChild(year);

        const price = document.createElement('p');
        price.textContent = `Price: ${car.price}`;
        card.appendChild(price);

        const img = document.createElement('img');
        img.src = car.image;
        img.width = 150;
        card.appendChild(img);

        const br = document.createElement('br');
        card.appendChild(br);

        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.addEventListener('click', () => carManager.deleteCar(index));
        card.appendChild(btn);

        parent.appendChild(card);
    });
}

class Car {
    constructor(brand, model, year, price, image){
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
        this._carsContainer = document.getElementById('cars');
    }

    addCar(brand, model, year, price, image){
        const car = new Car(brand, model, year, price, image);
        this._cars.push(car);
        renderCars(this._carsContainer, this._cars);
    }

    deleteCar(index) {
        this._cars.splice(index, 1);
        renderCars(this._carsContainer, this._cars);
    }

}

const form = document.querySelector('form');
const carManager = new CarManager();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const brand = form.brand.value;
    const model = form.model.value;
    const year = form.year.value;
    const price = form.price.value;
    const image = form.image.value;

    carManager.addCar(brand, model, year, price, image);

    form.reset();
});