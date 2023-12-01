var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return nums[left] < target ? left + 1 : left;
};
