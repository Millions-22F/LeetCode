function twoSum(nums, target) {
  const answer = [];
  nums.forEach((e, idx) => {
    let diff = target - e;
    for (let i = idx + 1; i < nums.length; i++) {
      if (nums[i] === diff) answer.push(i, idx);
    }
  });
  return answer;
}
