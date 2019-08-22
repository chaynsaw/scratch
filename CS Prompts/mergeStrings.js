// function mergeStrings(s1, s2) {
//   let result = [];
//   let s1arr = s1.split('');
//   let s2arr = s2.split('');
//   var dupCount = (arr) => {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       obj[arr[i]] = obj[arr[i]] + 1 || 1;
//     }
//     return Object.values(obj).reduce((a,b) => a + b) - Object.keys(obj).length
//   }
//   while(s1arr.length + s2arr.length !== 0) {
//     if (s1arr[0] > s2arr[0]) {
//       result.push(s2arr.shift())
//       continue;
//     } else if (s1arr[0] < s2arr[0]) {
//       result.push(s1arr.shift());
//       continue;
//     } else if (s1arr[0] === s2arr[0]) {
//       console.log('hit', s1arr, s2arr);
//       if (dupCount(s1arr) > dupCount(s2arr)) {
//         result.push(s2arr.shift());
//       } else if (dupCount(s2arr) > dupCount(s1arr)) {
//         result.push(s1arr.shift());
//       } else {
//         result.push(s1arr.shift());
//       }
//     }
//     if (s1arr[0]) {
//       result.push(s1arr.shift())
//     }
//     if (s2arr[0]) {
//       result.push(s2arr.shift())
//     }
//   }
//   return result;
// }

function mergeStrings(s1,s2){
  const result = [];
  const s1obj = {};
  const s2obj = {};
  const pointer1 = (i) => s1[i]
  const pointer2 = (i) => s2[i]
  for (let i = 0; i < s1.length; i++) {
    if (s1obj[s1[i]] == null) {
      s1obj[s1[i]] = 1;
    } else {
      s1obj[s1[i]]++;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2obj[s2[i]] == null) {
      s2obj[s2[i]] = 1;
    } else {
      s2obj[s2[i]]++;
    }
  }
  const counter = 0;
  let s1val = 0;
  let s2val = 0;
  while (s1val + s2val !== s1.length + s2.length) {
    if (s1obj[pointer1(s1val)] < s2obj[pointer2(s2val)]) {
      if (s1obj[pointer1(s1val)] > 0) {
        s1obj[pointer1(s1val)]--;
        result.push(pointer1(s1val));
        s1val++;
      }
    } else if (s1obj[pointer1(s1val)] > s2obj[pointer2(s2val)]) {
      if (s2obj[pointer2(s2val)] > 0) {
        s2obj[pointer2(s2val)]--;
        result.push(pointer2(s2val));
        s2val++;
      }
    } else if (s1obj[pointer1(s1val)] === s2obj[pointer2(s2val)]) {
      if (pointer1(s1val) < pointer2(s2val)) {
        s1obj[pointer1(s1val)]--;
        result.push(pointer1(s1val));
        s1val++;
      } else if (pointer2(s2val) < pointer1(s1val)) {
        s2obj[pointer2(s2val)]--;
        result.push(pointer2(s2val));
        s2val++;
      } else {
        s1obj[pointer1(s1val)]--;
        result.push(pointer1(s1val));
        s1val++;
      }
    } else if (s1obj[pointer1(s1val)] !== 0 && s1obj[pointer1(s1val)] !== undefined) {
      s1obj[pointer1(s1val)]--;
      result.push(pointer1(s1val));
      s1val++;
    } else {
      s2obj[pointer2(s2val)]--;
      result.push(pointer1(s2val));
      s2val++;
    }
  }
  return result; 
}
var s1 = 'dce'
var s2 = 'cccbd'
mergeStrings(s1,s2)

// var map1 = new Map();
// for (let i = 0; i < s1.length; i++) {
//   if (map1.get(s1[i]) != null) {
//     map1.set(s1[i], map1.get(s1[i]) + 1)
//   } else {
//     map1.set(s1[i], 1);
//   }
// }
// var map2 = new Map();
// for (let i = 0; i < s2.length; i++) {
//   if (map2.get(s2[i]) != null) {
//     map2.set(s2[i], map2.get(s2[i]) + 1)
//   } else {
//     map2.set(s2[i], 1);
//   }
// }