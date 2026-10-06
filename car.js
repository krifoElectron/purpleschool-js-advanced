class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = 0;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(km) {
        this.#mileage = km;
    }

    info() {
        console.log(`${this.#brand}: ${this.#model}. Пробег ${this.#mileage} км`)
    }
}

const car = new Car('ГАЗ', 'Волга ГАЗ 3110');
car.mileage = 10_000;
car.info();