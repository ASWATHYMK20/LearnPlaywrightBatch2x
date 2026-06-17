// Real QA Scenario: End-to-End Login for the App.vwo.com 


// openbrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()



function openBrowser(callback) {
    console.log("opening the chrome Browser");
    setTimeout(function () {
        callback();

    }, 1000);
}

function goToLoginPage(callback) {
    console.log("Step 2:Login page loaded");
    setTimeout(function () {
        callback();

    }, 2000);
}


function enterCredentials(callback) {
    console.log("Step 3: Credentials entered");
    setTimeout(function () {
        callback();

    }, 2000);
}

function clickLogin(callback) {
    console.log("Step 4: Login button clicked");
    setTimeout(function () {
        callback();

    }, 1000);
}


// THIS IS CALLBACK HELL 👇
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test Completed!")
            })
        })
    })
})







