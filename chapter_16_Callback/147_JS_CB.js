console.log("Test: started");
setTimeout(function () {
    console.log("Test 2:API response received");
}, 2000);

console.log("Test 3:moving to next test");

// **Why does Test 3 print before Test 2?**

/* Output
Test: started
Test 3:moving to next test
Test 2:API response received */