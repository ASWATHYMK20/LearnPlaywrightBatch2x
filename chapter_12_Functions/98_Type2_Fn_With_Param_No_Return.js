function greetByName(name) {
    console.log("Hi ", name);
}
greetByName("Pramod");
let result = greetByName("Amit");
console.log(result);

function beggar(money) {
    console.log("Thanks", money);
}
let returnMeSomething = beggar(100);
console.log(returnMeSomething);




/* OUTPUT
Hi  Pramod
Hi  Amit
undefined
Thanks 100
undefined */