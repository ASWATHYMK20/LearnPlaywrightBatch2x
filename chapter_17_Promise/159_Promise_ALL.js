let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are fine!");
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (error) {
    console.log("Failed:", error);
})

Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")

]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);

    });

})

// This is like a test report —
// you want results for ALL tests,
// not just stop at the first failure.


/* Output
All the checks are fine!
Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B failed
Test 3: fulfilled - Test C passed
Failed: DB DOWN */


//Learning Notes

// Promise.all()
// Waits for all promises.
// If one fails -> whole Promise.all fails.

// Promise.allSettled()
// Waits for all promises.
// Returns status of every promise.
// Never fails early.

// Output order of Promise callbacks
// is not always the same as code order.
// Promise callbacks run asynchronously
// and are placed in the event queue.
