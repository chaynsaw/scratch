function commonCharacterCount(s1, s2) {
  const obj = {};
  let count = 0;
  for (let elem of s1) {
    if (obj[elem]) {
      obj[elem] ++;
    } else {
      obj[elem] = 1;
    }
  }
  for (let elem of s2) {
    if (elem in obj && obj[elem] > 0) {
      count++;
      obj[elem] --;
    }
  }
  return count;
}
