// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 2345678 };


// Key will not be in the double quotes
// below key in double is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 345678765456 };

let a1 = { status: "pass" };
console.log(a1.status);  //pass
console.log(a1["status"]);  //pass

let a2 = { status: `pass` };
console.log(a2.status);

let a = { status: "pass" };
let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);


let c = { status: "pass" };  // "pass"  and 'pass' are same
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}





