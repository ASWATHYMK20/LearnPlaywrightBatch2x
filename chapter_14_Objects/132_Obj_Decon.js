const user = { name1: "John", age: 30, city: "NYC", job: "Automation engineer" };

// Basic destructuring

const { name1, age } = user; //Take the name1 and age properties from user and create variables with those names." 
// It's equivalent to: 
// const name1 = user.name1;
// const age = user.age;
console.log(name1);
console.log(age);


// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);


// destructuring
const { job } = user;


// Default values
const { country = "USA" } = user;
console.log(country);  //USA
console.log(user);  //{ name1: 'John', age: 30, city: 'NYC', job: 'Automation engineer' }



const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"

        }
    }
};


const { user: { address: { city } } } = data;  //Open data → go into user → go into address → take city.//This is called nested object destructuring and is very common when working with API responses in JavaScript.
console.log(city); //NYC

console.log(data.user.address.city);





