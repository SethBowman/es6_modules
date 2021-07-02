import WishList from "./classes/wishlist";

console.log("Working");

let form = document.getElementById("submitForm");

let wishList = new WishList();

form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();

    let make = event.target[0].value;
    let model = event.target[1].value;
    let year = event.target[2].value;

    wishList.add(make, model, year);
})
