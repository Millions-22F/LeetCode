var nextGreaterElement = function (nums1, nums2) {
  const result = Array(nums1.length).fill(-1);

  for (let i = 0; i < result.length; i++) {
    const nums2Index = nums2.indexOf(nums1[i]);

    for (let j = nums2Index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result[i] = nums2[j];
        break;
      }
    }
  }

  return result;
};
