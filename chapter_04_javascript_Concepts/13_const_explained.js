const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com"; //SyntaxError: Identifier 'BASE_URL' has already been declared
// BASE_URL = "https:/ / staging.thetestingacademy.com"; // TypeError: Assignment to constant variable.



let name = "pending";
name = "done";
{
    let name = "Dutta";
}

function say() {
    let name = "Dutta";
}
say();
say();