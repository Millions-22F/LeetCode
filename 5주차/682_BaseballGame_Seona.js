var calPoints = function (operations) {
  const scores = [];

  for (let i of operations) {
    let len = scores.length;
    if (i === "+") scores.push(scores[len - 1] + scores[len - 2]);
    else if (i === "D") scores.push(scores[len - 1] * 2);
    else if (i === "C") scores.pop();
    else scores.push(i * 1);
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
};
