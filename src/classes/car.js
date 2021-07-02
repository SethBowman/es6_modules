class Car {
    constructor (id, make, model, year) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    info() {
        document.getElementById("car-make").textContent = this.make;
        document.getElementById("car-model").textContent = this.model;
        document.getElementById("car-year").textContent = this.year;
    }

}

export default Car;