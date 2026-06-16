// ================================
// OBJECT COPY USING SPREAD (...)
// ================================

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Creates a NEW object and copies properties from obj1
// copy and obj1 are different objects in memory
const copy = { ...obj1 };

console.log(copy);
// Output: { a: 1, b: 2 }



// ================================
// LET EXAMPLE
// ================================

let config1 = { browser: "chrome", timeout: 300 };

// We are NOT replacing the object.
// We are only changing properties INSIDE the object.
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;

// At this moment config1 points to:
console.log(config1);

// Output:
// {
//   browser: 'Firefox',
//   timeout: 5000,
//   retries: 2
// }


// Reassignment:
// A NEW object is created.
// config1 now points to the new object.
config1 = { browser: "Safari" };

console.log(config1);

// Output:
// { browser: 'Safari' }


// Memory visualization:
//
// Before reassignment:
//
// config1
//    |
//    v
// { browser:'Firefox', timeout:5000, retries:2 }
//
// After reassignment:
//
// Old object (no longer referenced)
//
// config1
//    |
//    v
// { browser:'Safari' }



console.log("----");


// ================================
// CONST EXAMPLE
// ================================

const config = {
    browser: "Chrome",
    timeout: 3000
};

// Allowed:
// We are modifying properties of the SAME object.
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;

console.log(config);

// Output:
// {
//   browser: 'Firefox',
//   timeout: 5000,
//   retries: 2
// }


// NOT ALLOWED:
// const variables cannot be reassigned

// config = { browser: "Safari" };
// ❌ TypeError: Assignment to constant variable.


// Allowed:
// Changing a property of the existing object
config.browser = "safari";

console.log(config);

// Output:
// {
//   browser: 'safari',
//   timeout: 5000,
//   retries: 2
// }


// Memory visualization:
//
// config
//   |
//   v
// {
//   browser:'Chrome',
//   timeout:3000
// }
//
// After property changes:
//
// config
//   |
//   v
// {
//   browser:'safari',
//   timeout:5000,
//   retries:2
// }
//
// Notice:
// The object changed,
// but config still points to the SAME object.



// ================================
// LET vs CONST SUMMARY
// ================================

// let:
// ✅ Change properties
// ✅ Add properties
// ✅ Delete properties
// ✅ Reassign variable

// const:
// ✅ Change properties
// ✅ Add properties
// ✅ Delete properties
// ❌ Reassign variable



// Example:

let a = { x: 1 };
a = { x: 2 };     // ✅ Allowed


const b = { x: 1 };

// b = { x: 2 };  // ❌ Error

b.x = 2;          // ✅ Allowed


// Easy memory trick:
//
// let = "I can change the object AND change what variable points to"
//
// const = "I can change the object,
//          but I cannot change what variable points to"