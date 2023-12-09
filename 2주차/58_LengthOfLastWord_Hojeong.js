var lengthOfLastWord = function (s) {
  const SPACE = " ";
  let count = 0;
  let isLastWord = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === SPACE && !isLastWord) continue;

    if (s[i] !== SPACE) {
      count++;
      isLastWord = true;
      continue;
    }

    if (s[i] === SPACE && isLastWord) break;
  }

  return count;
};
