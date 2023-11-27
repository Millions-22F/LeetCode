var twoSum = function (nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (true) {
    const sum = sortedNums[left] + sortedNums[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [
        nums.indexOf(sortedNums[left]),
        nums.lastIndexOf(sortedNums[right]),
      ];
    }
  }
};
