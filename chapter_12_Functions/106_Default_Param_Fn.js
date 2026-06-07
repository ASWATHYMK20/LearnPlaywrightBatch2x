function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times,${delay}ms apart`);

}
retry("Login Test");
retry("Registration Test", 5, 2000);


//Output
//Retrying Login Test up to 3 times,1000ms apart
//Retrying Registration Test up to 5 times,2000ms apart