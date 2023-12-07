var lengthOfLastWord = function (s) {
  const lastWord = s.trim().split(" ").pop();
  return lastWord.length;
};
