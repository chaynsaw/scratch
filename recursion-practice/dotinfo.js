var pow = (x, n) => {
  let result = 1; 
  while (n > 0) {
    result *= x
    n--;
  }
  return result;
}

pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) // 16

// For Version
var sumTo = (n) => {
  result = 0;
  while (n > 0) {
    result += n;
    n--;
  }
  return result;
}
console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

var sumTo = (n) => {
  var memo = {}
  var sumToMemo = (n) => {
    if (n === 1) {
      return 1;
    } 
  }
}
function fibonacci(num, memo) { 
  if (num in memo) return memo[num];
  if (num <= 1) return 1;
  
  return memo[num]= fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}