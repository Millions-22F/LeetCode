var climbStairs = function (n) {
  let step1 = 1;
  let step2 = 2;

  if (n < 3) return n;

  for (let i = 3; i <= n; i++) {
    [step1, step2] = [step2, step1 + step2];
  }

  return step2;
};
