function centuryFromYear(year) {
  // 1 - 100 = 1st century
  // 101 - 200 = 2nd century
  // 201 - 300 = 3rd century
  if (Number.isInteger(year / 100)) {
    return parseInt(year / 100)
  } else {
    return parseInt(year / 100) + 1;
  } 
  if (year / 100 < 1) {
    return 1;
  }
}
function checkPalindrome(inputString) {
  for (let i = 0, j = inputString.length - 1; j >= i; i++, j--) {
    if (inputString[i] !== inputString[j]) {
      return false;
    }
  }
  return true;
}
function adjacentElementsProduct(inputArray) {
  let largestProduct = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > largestProduct) {
      largestProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return largestProduct;
}

function shapeArea(n) {
  // n = 1 / 1
  // n = 2 / 1, 3, 1 / 5
  // n = 3 / 1, 3, 5, 3, 1 / 13
  // n = 4, 1, 3, 5, 7, 5, 3, 1 / 25
    let total = 0;
    for (let i = 1; i < n * 2; i += 2) {
      total += i;
      if (i !== n * 2 - 1) {
        total += i;
      }
    }
    return total;
  }
  
function shapeArea(n, memo = {}) {
  
  if (n in memo) {
    return memo[n];
  }
  if (n === 1) {
    return 1;
  }
  console.log(memo)
  return memo[n] = shapeArea(n - 1, memo) + 2
}

function fibonacci(num, memo = {}) {
  console.log(memo);
  if (num in memo) return memo[num];
  if (num <= 1) return 1;
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

function almostIncreasingSequence(sequence) {
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (!sequence[i + 1]) {
        sequence.splice(i, 1);
        break;
      } else if (!sequence[i - 2]) {
        sequence.splice(i - 1, 1);
        break;
      } else if (sequence[i + 1] > sequence[i] && sequence[i] > sequence[i - 2]) {
        sequence.splice(i - 1, 1);
        break;
      } else if (sequence[i + 1] > sequence[i] && sequence[i] > sequence[i - 2]) {
        sequence.splice(i, 1);
        break;
      } else if (sequence[i + 1] > sequence[i] && sequence[i] === sequence[i - 2]) {
        console.log('hit');
        sequence.splice(i, 1);
        break;
      } else {
        sequence.splice(i - 1,1);
        break;
      }
    }
  }
  console.log(sequence);
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      return false;
    }
  }
  return true;
}
