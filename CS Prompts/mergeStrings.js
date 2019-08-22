function mergeStrings(s1, s2) {
  let result = [];
  let s1arr = s1.split('');
  let s2arr = s2.split('');
  var dupCount = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = obj[arr[i]] + 1 || 1;
    }
    return Object.values(obj).reduce((a,b) => a + b) - Object.keys(obj).length
  }
  while(s1arr.length + s2arr.length !== 0) {
    if (s1arr[0] > s2arr[0]) {
      result.push(s2arr.shift())
      continue;
    } else if (s1arr[0] < s2arr[0]) {
      result.push(s1arr.shift());
      continue;
    } else if (s1arr[0] === s2arr[0]) {
      console.log('hit', s1arr, s2arr);
      if (dupCount(s1arr) > dupCount(s2arr)) {
        result.push(s2arr.shift());
      } else if (dupCount(s2arr) > dupCount(s1arr)) {
        result.push(s1arr.shift());
      } else {
        result.push(s1arr.shift());
      }
    }
    if (s1arr[0]) {
      result.push(s1arr.shift())
    }
    if (s2arr[0]) {
      result.push(s2arr.shift())
    }
  }
  return result;
}
var s1 = 'dce'
var s2 = 'cccbd'
mergeStrings(s1,s2)