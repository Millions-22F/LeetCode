var pivotIndex = function (nums) {
  const sumArr = [0];
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sumArr.push(sumArr[sumArr.length - 1] + nums[i]);
    totalSum += nums[i];
  }

  for (let i = 0; i < sumArr.length - 1; i++) {
    if (sumArr[i] * 2 === totalSum - nums[i]) return i;
  }

  return -1;
};
