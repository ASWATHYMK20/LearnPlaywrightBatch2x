let testResults = ["Pass", "Fail", "Pass", "Skip"];

testResults.forEach(function (result, index) {
    console.log("Test" + index + "=>" + result);
})

// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1.


/* Output
Test0=>Pass
Test1=>Fail
Test2=>Pass
Test3=>Skip */


//Notes:
// forEach callback parameter order:
// 1st parameter = current array value
// 2nd parameter = current index
//
// JavaScript uses POSITION, not variable names.

//testResults.forEach(function (result, index)
// forEach(function(value, index) {})
// forEach(function(apple, banana) {})
//
// All work the same way.