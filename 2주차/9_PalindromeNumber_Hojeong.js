var isPalindrome = function (x) {
  if (x < 0) return false;

  const numArray = String(x).split("");
  let left = 0;
  let right = numArray.length - 1;

  while (left < right) {
    if (numArray[left] !== numArray[right]) return false;

    left++;
    right--;
  }

  return true;
};
