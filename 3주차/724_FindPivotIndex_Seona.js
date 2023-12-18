var pivotIndex = function (nums) {
  let idx = 0;
  let left = 0;
  let right = nums.reduce((acc, cur) => acc + cur, 0) - nums[idx];

  while (idx < nums.length) {
    if (left === right) return idx;

    left += nums[idx];
    right -= nums[idx + 1];
    idx++;
  }

  return -1;
};
