let a = [1, 2];
let b = [3, 4];

//let c = a + b;
//console.log(c);  //1,23,4

let c1 = a.concat(b);
console.log(c1); // [ 1, 2, 3, 4 ]

// spread (modern way) - concatenation. (...)
let d = [...a, ...b]; // Three dots means all the elements of a
console.log(d); //[ 1, 2, 3, 4 ]



// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);  // pass|fail|skip

let s1 = ["pass", "fail", "skip"].join("");
console.log(s1);  // passfailskip