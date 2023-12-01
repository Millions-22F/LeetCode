var climbStairs = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i <= 2) {
      result[i] = i;
      continue;
    }

    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
};
