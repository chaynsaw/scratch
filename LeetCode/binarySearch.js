var search = function(nums, target) {
  // function binarySearch() {
  //   let left = 0;
  //   let right = nums.length - 1;
  //   let mid = Math.floor(nums.length / 2);
  //   while (left <= right) {
  //     mid = Math.floor((left + right) / 2)
  //     if (target > nums[mid]) {
  //       left = mid - 1;
  //     } else if (target < nums[mid]) {
  //       right = mid + 1;
  //     } else {
  //       return mid;
  //     }
  //   }
  //   return -1;
  // }
  // binarySearch()
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      left = mid; 
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1; 
};

search([-1,0,3,5,9,12], 9)