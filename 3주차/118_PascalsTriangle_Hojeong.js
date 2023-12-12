var generate = function (numRows) {
  const result = [[1], [1, 1]];

  if (numRows <= 2) {
    return result.slice(0, numRows);
  }

  for (let i = 2; i < numRows; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }

    result.push(row);
  }

  return result;
};
