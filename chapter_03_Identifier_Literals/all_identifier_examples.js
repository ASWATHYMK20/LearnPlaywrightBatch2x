// ================================================================
// ALL IDENTIFIER EXAMPLES
// Consolidated from 06_Identifier_Rules.js & 07_Identifier_Part2.js
// ================================================================

// ================================================================
// SECTION 1: Identifier Rules (from 06_Identifier_Rules.js)
// ================================================================

// Valid identifier characters: $, _, letters, digits (not at start)
var $ = 10;
var _a = 12;
var p = 10;
var ab123 = 34;

// Case sensitivity
var Name = "Aswathy";
var name = "MK";

// Invalid: spaces not allowed in identifiers
// var pramod dutta = "hello";

// Valid separators and conventions
var pramod_dutta = "hello";
var pramod$dutta = "hello";
var pramodu1232 = "hello";

console.log("=== Identifier Rules ===");
console.log("$ =", $);
console.log("_a =", _a);
console.log("p =", p);
console.log("ab123 =", ab123);
console.log("Name =", Name);
console.log("name =", name);
console.log("Case sensitive? Name !== name:", Name !== name);
console.log("pramod_dutta =", pramod_dutta);
console.log("pramod\$dutta =", pramod$dutta);
console.log("pramodu1232 =", pramodu1232);

// ================================================================
// SECTION 2: Naming Conventions (from 07_Identifier_Part2.js)
// ================================================================

console.log("\n=== Naming Conventions ===");

// camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;
console.log("1. camelCase:", userName, totalPrice, isLoggedIn);

// PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
console.log("2. PascalCase:", UserProfile, ShoppingCart);

// snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;
console.log("3. snake_case:", user_name, total_price, is_logged_in);

// SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";
console.log("4. SCREAMING_SNAKE_CASE:", MAX_SIZE, API_KEY, DATABASE_URL);

// Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;
let nCount = 5;
let arrItems = [];
console.log("5. Hungarian Notation:", strName, bActive, nCount, arrItems);
