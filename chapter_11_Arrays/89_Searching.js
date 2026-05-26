let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("skip");  //-1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");  //4


// includes — returns boolean
results.includes("error"); //true
results.includes("skip") //false


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

// findIndex
let b = nums.findIndex(n => n > 20);
console.log(b); //1
let c = nums.findLast(n => n > 20); //45
console.log(c);
let d = nums.findLastIndex(n => n > 20);
console.log(d); //3