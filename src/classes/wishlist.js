import Car from "./car";

class WishList {
    constructor() {
        this.list = [];
        this.nextId = 0;
    }

    add(make, model, year) {
        let car = new Car(this.nextId++, make, model, year);
        this.list.push(car)
        this.updateDomWishList();
    }

    remove(carId) {
        this.list = this.list.filter((car) => car.id != carId);
        this.updateDomWishList();
    }

    updateDomWishList() {
        let container = document.getElementById("wishListContainer");
        let ul = document.createElement("ul");
        this.list.forEach((car) => {
            let li = document.createElement("li");
            li.id = car.id;
            li.textContent - car.model;
            li.addEventListener("click", car.info);
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
}


export default WishList;