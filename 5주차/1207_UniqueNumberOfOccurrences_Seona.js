var uniqueOccurrences = function (arr) {
  arr.sort((a, b) => a - b);

  const occurrences = [];
  let count = 0;

  for (let i in arr) {
    if (arr[i] === arr[+i + 1]) {
      count++;
    } else {
      if (occurrences.indexOf(count) > -1) {
        return false;
      } else {
        occurrences.push(count);
        count = 0;
      }
    }
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
