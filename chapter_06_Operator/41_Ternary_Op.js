let rajkumar_age = 18;
let raj_will_goa = rajkumar_age >= 18 ? "RJ will go goa" : "No Goa";
console.log(raj_will_goa);

let a = 10;
a += 10;
// a=+10;  this doen't 

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS


let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);



let iscI = true;
let browserMode = iscI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");




let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response:${responseTime}ms-${slaStatus}`);

//  Nested Ternary

// Multiple Condition

let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "else he will not go"; "else he will not go";
console.log(is_pramod_goa);

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "No GOA";
console.log(is_pramod_d);

/// --------------------

let statusCode = 400;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}:${category}`);

// ---- 

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("Temparature:", temp, "| Feel:", feel);



