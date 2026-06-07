// Rest of the param.
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}
logResult('Login', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");
logResult('Logout', "Hi", "Hello", 1, 2, 3, 4, 5)


/* outpout
Login
[ 1, 2, 3 ]
Reg Test
[ 'Hello', 'Pramod' ]
Logout
[ 'Hi', 'Hello', 1, 2, 3, 4, 5 ] */
