function matrixElementsSum(matrix) {
  function findRoomPrices(i,j, totalPrice = 0) {
    if (matrix[i][j] !== 0) {
      totalPrice += matrix[i][j];
    } 
    if (matrix[i][j] === 0) {
      return totalPrice;
    }
    if (matrix[i + 1] && matrix[i + 1][j] !== 0) {
      return findRoomPrices(i + 1, j, totalPrice);
    } else {
      return totalPrice;
    }
  }
  let sum = 0; 
  for (let i = 0; i < matrix[0].length; i++) {
    sum += findRoomPrices(0,i);
  }
  return sum;
}

matrix = [[1,1,1,0], 
[0,5,0,1], 
[2,1,3,10]]
matrixElementsSum(matrix);

