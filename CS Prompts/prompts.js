//   You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

// For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".

// You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual way. If both number of occurences and characters are equal, you should take the characters from the first string to the result.

// Given two strings s1 and s2, return the result of the special merge function you are implementing.

// Example

// For s1 = "dce" and s2 = "cccbd", the output should be
// mergeStrings(s1, s2) = "dcecccbd".
// All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.

// For s1 = "super" and s2 = "tower", the output should be
// mergeStrings(s1, s2) = "stouperwer".
// Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.

mergeStrings(s1,s2){

}

function flip(arr, k) {

}

arr = [5,2,3,4,1];

//   var hasDuplicates = (arr) => {
//     let obj = {};
//     for (let index of arr) {
//       if (!obj[index]) {
//         obj[index] = 1;
//       } else {
//         obj[index]++;
//       }
//     }
//     if (Object.values(obj).filter((elem) => elem > 1).length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
// }

// Codewriting

// Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

// Example

// For a = [10, 2], the output should be concatenationsSum(a) = 1344.

// a[0] ∘ a[0] = 10 ∘ 10 = 1010,
// a[0] ∘ a[1] = 10 ∘ 2 = 102,
// a[1] ∘ a[0] = 2 ∘ 10 = 210,
// a[1] ∘ a[1] = 2 ∘ 2 = 22.
// So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

// For a = [8], the output should be concatenationsSum(a) = 88.

// There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88, so the answer is 88.

function concatenationsSum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      sum += parseInt(a[i].toString() + a[j].toString())
    }
  }
  return sum;
} 

function concatenationsSum(a, memo = {}) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (memo[a[i].toString() + a[j].toString()]) {
        sum += memo[a[i].toString() + a[j].toString()];
      } else {
        memo[a[i].toString() + a[j].toString()] = 
      }
      sum += parseInt(a[i].toString() + a[j].toString())
    }
  }
  return sum;
} 
a = [10, 2] 
console.log(concatenationsSum(a)) // 1344