function twoSum(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      let sum = arr[i] + arr[j];
      if (sum === k) {
        return true;
      }
    }
  }
  
  return false;
}

// have a vague idea how memory is managed with variables in JavaScript
// heap/stack in JavaScript
// maybe explanations are too detailed, code more. 
// simple ideas are natural 
// or you could binarySearch for the complement? 10 - 1. 


// twoSum([1,3,4,2,2], 5) // true;
twoSum([1,1,2], 5)
twoSum([1,3,4], 2) // true;
// this test specifically solves the correct problem, helps distinguish between the two situations. (a common error that can be made)
twoSum([], 5) // false
twoSum([0], 5);
twoSum(largeArr, 5); // false

let largeArr = [];
for (let i = 0; i < 10000000; i++) {
  largeArr.push(1);
}

// probably not going to add an exception. 

// How many options does it take to create a hashTable. Maybe create one from scratch. 
// Look at binarySearchArray. 

// know exactly what break/continue do (write more code, talk to people)
// read up on mergeSort, quickSort, and how sort() does quickSort/mergeSort
// read and implement hashTables
// know basic complexity, what does log n do, what does n log n mean, 
// think about doing twoPointer/twoSum, increasing smaller number and then bigger number
// code a solution

// 