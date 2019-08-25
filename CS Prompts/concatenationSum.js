function concatenationsSum(a) {
  const map = new Map();
  const sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      map.set()
      const val = a[i].toString() + a[j];
      if (memo[val] == null) {
        const num = parseInt(val);
        sum += num;
        memo[val] = num;
      } else {
        sum += memo[val];
      }
    }
  }
  return sum;
}

function concatSum(a) {
  let sum = 0; 
  const memo = {};
  for (let i = 0; i < a.length; i++) {
    const val = a[i].toString() + a[0];
    const val2 = a[0] + a[i].toString();
    const val3 = a[i].toString() + a[i];
    if (memo[val] == null) {
      const num = parseInt(val);
      sum += num;
      memo[val] = num;
    } 
    if (memo[val2] == null) {
      const num = parseInt(val2);
      sum += num;
      memo[val] = num;
    }
    if (memo[val3] == null) {
      const num = parseInt(val3);
      sum += num;
      memo[val] = num;
    }
  }
  console.log(memo);
  return sum;
}
// This only works if the array.length is under 3... 
function concSum(a) {
  let sum = 0; 
  const memo = {};
  let memoize = (value) => {
    if (memo[value] == null) {
      const num = parseInt(value);
      sum += num;
      memo[value] = num;
    }
  }
  for (let i = 0; i < a.length; i++) { 
    for (let j = 0; j < a.length; j++) {
      const val = a[i].toString() + a[j];
      const val2 = a[j] + a[i].toString();
      const val3 = a[i].toString() + a[i];
      memoize(val);
      memoize(val2);
      memoize(val3);
    }
  }
  console.log(memo);
  return sum;
}

var a = [10, 2];
concSum(a);