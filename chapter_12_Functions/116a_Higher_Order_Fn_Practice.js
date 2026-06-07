function animalFavFood(animal) {
    if (animal === "cat") {
        console.log("Fish is cat fav food")
    }
    else if (animal === "dog") {
        console.log("Chicken is dog fav food")
    } else {
        console.log("Unknown animal");
    }
}
function indoorAnimal() {

    return "cat";
}
function outdoorAnimal() {
    return "dog";
}

animalFavFood(indoorAnimal());