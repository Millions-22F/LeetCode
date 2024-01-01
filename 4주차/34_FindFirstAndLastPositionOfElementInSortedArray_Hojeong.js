const searchStart = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = ~~((left + right) / 2);

    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  if (left === right && nums[left] === target) return left;

  return -1;
};

const searchEnd = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = ~~((left + right) / 2);

    if (target >= nums[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  if (left === right && nums[left] === target) return left;
  if (left === right && nums[left - 1] === target) return left - 1;

  return -1;
};

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  const start = searchStart(nums, target);
  const end = searchEnd(nums, target);

  return [start, end];
};
