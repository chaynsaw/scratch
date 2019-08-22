function concatenationsSum(a) {
  const memo = {};
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
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
