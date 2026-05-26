let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5


// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);
console.log(arr);


arr.splice(2, 0, 99);//add
console.log(arr);
arr.splice(2, 1, 98); //replace
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);


//OUTPUT
//  [ 1, 2, 3, 4, 5, 6 ]
//  [ 1, 2, 4, 5, 6 ]
//  [ 1, 2, 99, 4, 5, 6 ]
//  [ 1, 2, 98, 4, 5, 6 ]
//  [ 1, 10, 20, 4, 5, 6 ]
