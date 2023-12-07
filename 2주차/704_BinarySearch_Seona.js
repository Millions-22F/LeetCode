var search = function (nums, target) {
  const center = nums[~~(nums.length / 2)];

  return center > target ? nums.indexOf(target) : nums.lastIndexOf(target);
};
