var search = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// ou 

var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  
  do {
    const middle = parseInt((right + left) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (target > nums[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  } while (left <= right)
  return -1
  }
