//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0); //false

// ??  Nullish
let amul = null;
let milk_required = amul ?? "nandhini milk";
console.log(milk_required);

// The ?? operator is called the Nullish Coalescing Operator.
//"If the value on the left is null or undefined, use the value on the right."