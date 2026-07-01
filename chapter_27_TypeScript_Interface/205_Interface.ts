interface Calculator {
    add(a: number, b: number): number;
    substract(a: number, b: number): number;
    multiply: (a: number, b: number) => number; // Alternative syntax //multiply(a:number,b:number):number;

}

const noObject = {
    id: 1
}


const calc: Calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc);



// OUTPUT
// {
//   add: [Function: add],
//   substract: [Function: substract],
//   multiply: [Function: multiply]
// }


//--------------------------


// An easy way to remember

// Think of an interface as a job application.

// The job says:

// To become a Calculator, you must know:

// ✔ Add
// ✔ Subtract
// ✔ Multiply

// Then your object (calc) applies for the job:

// const calc: Calculator = { ... }

// TypeScript interviews it:

// Can you add? ✅
// Can you subtract? ✅
// Can you multiply? ✅

// Hired! 🎉

// If even one required skill is missing, TypeScript rejects it with an error.

