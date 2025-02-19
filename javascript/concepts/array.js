// javascript arary methods 

// push    adds at the end;
let arr = [10, 20, 30];
let newLength = arr.push(40, 50);
console.log(arr); // [10, 20, 30, 40, 50]
console.log(newLength); // 5


// pop() - Remove the Last Element
 arr = [1, 2, 3, 4];
let removedElement = arr.pop();
console.log(arr); // [1, 2, 3]
console.log(removedElement); // 4

// unShift - Adds new element at the begining
arr = [30, 40, 50];
newLength = arr.unshift(20, 10);
console.log(arr); // [20, 10, 30, 40, 50]
console.log(newLength); // 5

//shift remove the first element 
arr = ['a', 'b', 'c'];
removedElement = arr.shift();
console.log(arr); // ['b', 'c']
console.log(removedElement); // 'a'

//concat() - merge two  array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combinedArr = arr1.concat(arr2);
let combinedArr2 = arr2.concat(arr1)
console.log(combinedArr) // [1,2,3,4,5,6]
console.log(combinedArr2)
 

//slice(); extract a section of an array 
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (original array is not modified)


//split();  add/ remove element 
//
//array.splice(startIndex, deleteCount, item1, item2, ...);

let arr = ['apple', 'banana', 'cherry'];
let removedItems = arr.splice(1, 1, 'blueberry', 'grape');
console.log(arr); // ['apple', 'blueberry', 'grape', 'cherry']
console.log(removedItems); // ['banana']


arameters:
startIndex (required)
The index at which to begin changing the array. If the index is negative, it starts counting from the end of the array.
deleteCount (optional)
The number of elements to be removed from the array, starting at startIndex. If omitted, all elements from startIndex to the end of the array will be removed. If set to 0, no elements are removed.
item1, item2, ... (optional)
The elements to add to the array starting from startIndex. If no elements are provided, splice() only removes elements.
Examples of splice() Usage
1. Removing Elements
If you only want to remove elements from an array, set deleteCount to the number of elements you want to remove, and leave out the third parameter.

javascript
Copy
Edit
let arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 2
arr.splice(2, 2);

console.log(arr);  // Output: [1, 2, 5]
2. Adding Elements
To add elements without removing any, set deleteCount to 0 and provide the elements to insert.

javascript
Copy
Edit
let arr = [1, 2, 3];

// Add "4" at index 1 (between 1 and 2)
arr.splice(1, 0, 4);

console.log(arr);  // Output: [1, 4, 2, 3]



// indexOf() - Find an Element’s Index
let arr = [10, 20, 30, 40];
let index = arr.indexOf(30);
console.log(index); // 2
// 🟢 Return Type: Number (the index of the found element, or -1 if not found)


// includes();  return true / false  

let arr = [1, 2, 3, 4, 5];
let containsThree = arr.includes(3);
let containsSix = arr.includes(6);
console.log(containsThree); // true
console.log(containsSix); // false

// reverse() Reverse an Array 
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]

//sort - sort element 
let arr = [40, 10, 30, 20, 50];
arr.sort((a, b) => a - b);// accending
arr.sort((a,b)=>b-a) //desending 
console.log(arr); // [10, 20, 30, 40, 50]


// join() -- join all elements into a string and retrun a string 
let arr = ['apple', 'banana', 'cherry'];
let joined = arr.join(', ');
console.log(joined); // "apple, banana, cherry"
// retrun string 


//toString () convert array to a string  
let arr = [1, 2, 3, 4];
let str = arr.toString();
console.log(str); // "1,2,3,4"
// return a string 


//form 
let arr = Array.from([1,5,10])
console.log(arr)

//replace 
let s = "baba"
let ms s.map((e)=>{
    s.replace("b","B");
})
let ns = s.replace('b',"B");
console.log(ns,s,ms)

