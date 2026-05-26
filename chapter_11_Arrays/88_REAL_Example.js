let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

browser.pop();
console.log(browser);
let removed = browser.shift();
console.log(browser);
console.log(removed);
console.log("--------------")

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("opera is removed from the selenium!");
    }
}
