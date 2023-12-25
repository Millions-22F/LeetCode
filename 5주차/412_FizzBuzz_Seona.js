var fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    let tmp = "";
    if (i % 3 === 0) tmp += "Fizz";
    if (i % 5 === 0) tmp += "Buzz";
    if (tmp === "") tmp += i;
    answer.push(tmp);
  }

  return answer;
};
