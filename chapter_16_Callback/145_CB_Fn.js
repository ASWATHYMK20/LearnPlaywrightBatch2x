function cafe(item, callWhenTableisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableisReady();
}


function callWhenTableisReady() {
    console.log("calling 9834567654");
}
cafe("Burger", callWhenTableisReady);


cafe("Pizza", function () {
    console.log("calling 8234567654")
})

cafe("Momos", () => {
    console.log("calling 7234565432")
});