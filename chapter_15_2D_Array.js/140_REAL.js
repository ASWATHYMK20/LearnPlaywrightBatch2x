let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed? 
// How many test cases are passed? 
// What is the status code that you have got for the fail?
console.log(testMatrix.length);

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
}



for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")  // Print something on the screen, but DON'T go to the next line
    }
    console.log();
}


/* chatgpt refer similar toabovr

for (let banana of testMatrix) {
    for (let mango of banana) {
        console.log(mango);
    }
} */



//forEach
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});