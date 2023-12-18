var nextGreaterElement = function (nums1, nums2) {
  const answer = [];

  for (let i of nums1) {
    let next = nums2.slice(nums2.indexOf(i) + 1).find((e) => e > i);
    next ? answer.push(next) : answer.push(-1);
  }

  return answer;
};
