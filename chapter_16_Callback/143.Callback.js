function print() {
    console.log("Normal Function is called");
}


function placeOrder(clipboardItem, pramodCallback) {
    console.log("Hi, Your order is placed");
    pramodCallback();
}


//First Way
placeOrder("pizza", print);

// Sencond Way Anoymous
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

// Third Way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});
