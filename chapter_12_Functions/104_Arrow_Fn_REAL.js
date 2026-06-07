//if(ourStatusCode >= 200 && ourStatusCode < 300)

//This is a perfectly normal function. 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// validateStatusCode(203);

// This is a function as an expression. 
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//validateStatusCode_Exp(209);


// Arrow function 
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine")
    }
}
validateStatusCode_Arrow();