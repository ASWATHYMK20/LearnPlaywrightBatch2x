//   *

//  ***

// ***** 
let n = 3;

for (i = 1; i <= n; i++) {
    let row = "";

    // Add spaces
    for (j = 1; j <= (3 - i); j++) {
        row += " ";
    }

    // Add stars
    for (k = 1; k <= ((2 * i) - 1); k++) {
        row += "*";
    }
    console.log(row)

}