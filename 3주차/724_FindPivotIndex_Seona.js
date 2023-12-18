var pivotIndex = function (nums) {
  let idx = 0;

  while (idx < nums.length) {
    let left = nums.slice(0, idx).reduce((acc, cur) => acc + cur, 0);
    let right = nums.slice(idx + 1).reduce((acc, cur) => acc + cur, 0);

    if (left === right) return idx;
    else idx++;
  }

  return -1;
};
