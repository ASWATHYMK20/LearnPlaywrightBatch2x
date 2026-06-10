// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";


//includes
console.log(url.includes("staging")); //true
console.log(url.includes("production"));  //false


// startsWith / endsWith
url.startsWith("https");    // true
url.startsWith("http://"); //false
url.endsWith("true");       // true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));  //10
console.log(url.lastIndexOf("a")); //24

console.log(url.indexOf("nothere"));  //If the text is not found, it returns -1.
console.log(url.indexOf("x"));  //-1
console.log(url.indexOf("staging")); // 8

console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 




/* | Method      | Searches for    | Supports Regex? | Not Found |
   | ----------- | --------------- | --------------- | --------- |
   | indexOf() | String only       | ❌ No           | -1     |
   | search()` | String or Regex   | ✅ Yes          | -1      | */

