function isLucky(n) {
  // for n length of 4, 0, 1 is one half, 2, 3 is the other.
  // for n length of 6, 0,1,2 | 3,4,5
  // for n length of 8, 0,1,2,3 | 4,5,6,7
  // floor (n/2) is the upper bound of first half index-wise, ceil (n/2) is the lower bound of the second half.
  const firstHalfEnd = Math.floor((n.toString().length - 1) / 2);
  
  const secondHalfBeg = Math.ceil((n.toString().length - 1) / 2);
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i <= firstHalfEnd; i++) {
    console.log(parseInt(n.toString()[i]));
    firstSum += parseInt(n.toString()[i]);
  } 
  for (let i = secondHalfBeg; i < n.toString().length; i++) {
    secondSum += parseInt(n.toString()[i]);
  }
  if (firstSum === secondSum) {
    return true;
  } else {
    return false;
  }
}
