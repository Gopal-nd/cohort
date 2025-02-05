//for each - Iterate over elements
let arr = [10, 20, 30];
arr.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});
// Output:
// 0: 10
// 1: 20
// 2: 30
// do not return any thing 


// map() - Transform each element 
let arr = [1, 2, 3];
let doubledArr = arr.map(num => num * 2);
console.log(doubledArr); // [2, 4, 6]
// return a new array with the compute value for each


//filter() filter elements based on the condition 
let arr = [10, 20, 30, 40, 50];
let filteredArr = arr.filter(num => num > 30);
console.log(filteredArr); // [40, 50]
//  Return Type: New array with elements that pass the test (in this case, [40, 50])


// reduce() reduce an array to simple number
let arr = [1,2,3,4];
let sum = arr.reduce((acc, num)=> acc + num, 0);
console.log(sum)
//return a single computed value


// find() -- find the first matching element 
let arr = [1, 3, 5, 7, 9];
let firstEven = arr.find(num => num ===5);
let firstEven = arr.find(num => num % 2 === 0);
console.log(firstEven); // undefined (no even numbers found)
// return the first matched value "not index"



// findIndex() - Find Index of First Matching Element
let arr = [10, 20, 30, 40];
let index = arr.findIndex(num => num > 25);
console.log(index); // 2
//🟢 Return Type: Number (the index of the first element that matches the condition, or -1 if no match is found)
//🟢 Description: Returns the index of the first element in the array that satisfies the provided testing function.
