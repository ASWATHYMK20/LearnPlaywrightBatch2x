// *****

// ****

// ***

// **

// *

// Print reverse


let n = 5;
for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";    //row = row + "*";
    }
    console.log(row.trim());
}