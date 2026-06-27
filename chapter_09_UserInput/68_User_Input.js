let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// Output (Error)
// let num = prompt("Enter a number:");
//           ^

// ReferenceError: prompt is not defined