var removeDuplicates = function (nums) {
  const newNums = [...new Set(nums)];

  for (let i in newNums) {
    nums[i] = newNums[i];
  }

  return newNums.length;
};
