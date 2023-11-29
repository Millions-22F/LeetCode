var reverseVowels = function (s) {
  const vowels = "aeiou" + "aeiou".toUpperCase();
  const vowelsCol = [];
  const answer = [];

  for (let i of s) {
    if (vowels.indexOf(i) > -1) vowelsCol.unshift(i);
  }

  for (let i of s) {
    vowels.indexOf(i) === -1 ? answer.push(i) : answer.push(vowelsCol.shift());
  }

  return answer.join("");
};
