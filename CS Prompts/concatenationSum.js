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
  const sum = 0; 
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
      const num = parseInt(val);
      sum += num;
      memo[val2] = num;
    }
    if (memo[val3] == null) {
      const num = parseInt(val);
      sum += num;
      memo[val3] = num;
    }
  }
  return sum;
}