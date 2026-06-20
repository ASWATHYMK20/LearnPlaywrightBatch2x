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