function outer() {
    let message = "hello";
    console.log("OUTER CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;

}

let fn_inner = outer();
fn_inner();
// inner(); // ReferenceError: inner is not defined


/* output
OUTER CALLED!
hello */
