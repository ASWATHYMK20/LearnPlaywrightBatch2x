let a = [1, 2, 3, 3];

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 1 -> 0,0


console.log(grid[1, 0]);  // [ 1, 2, 3 ]

// Print all the elements




for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        console.log(grid[i][j]);
    }
    console.log("\n");

}