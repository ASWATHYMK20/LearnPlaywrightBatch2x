async function testapi() {
    try {
        let result = await Promise.reject("503 reject");
    }
    catch (error) {
        console.log('Error', error);
    }
    finally {
        console.log("Clean up!")
    }
}
testapi();


// Learning Note
// async -> Function may take time to complete.
//
// await -> Wait for Promise to finish.
//
// try -> Code that may fail.
//
// catch -> Handles errors.
//
// finally -> Always runs (success or failure).
//
// Common in automation:
// API calls, browser actions, file handling,
// database operations, cleanup activities.

// One-line rule to remember
// try = do work
// catch = handle error
// finally = always execute



