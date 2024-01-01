var removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;

  let uniqueElements = 1;
  let nextNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nextNum === nums[i]) {
      continue;
    }

    if (nextNum < nums[i]) {
      nums[uniqueElements] = nums[i];
      nextNum = nums[i];
      uniqueElements++;
    }
  }

  return uniqueElements;
};
