// Template literally. 

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);


let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Playwright
const rowIndex = 3;
const columnName = "email";

