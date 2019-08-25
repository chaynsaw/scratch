function allLongestStrings(inputArray) {
  let maxElemLength = inputArray[0].length;
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxElemLength) {
      maxElemLength = inputArray[i].length;
      result = [];
      result.push(inputArray[i]);
    } else if (inputArray[i].length === maxElemLength) {
      result.push(inputArray[i]);
    }
  }
  return result;
}
