// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// p.then(function (value) {
//     console.log("Answer:", value);
// });


// let p1 = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });

// p1.catch(function (err) {
//     console.log("Caught:", err);
// });



// let p3 = Promise.resolve(5);

// p3.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// });


// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//     });


// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     })
//     .then(function () {
//         console.log("This will not run");
//     })
//     .catch(function (err) {
//         console.log("Caught:", err.message);
//     });


// Promise.reject("Test Failed")
//     .then(function (data) {
//         console.log("Data:", data);
//     })
//     .catch(function (err) {
//         console.log("Error:", err);
//     })
//     .finally(function () {
//         console.log("Cleanup done");
//     });

Promise.resolve("Quick win").then(function (msg) {
    console.log(msg);
});


Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);
});



let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout:PASS");











