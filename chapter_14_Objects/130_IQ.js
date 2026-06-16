const user = {
    name: "John",
    age: 30,
    email: "john@emaple.doc"
};
console.log(user);
console.log(user.name);
console.log(user["age"]);


// Dynamic property access
const key = "age";
console.log(user[key]);
// console.log(user.key); //undefined


// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);




let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptors(obj, "name"));

// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }
