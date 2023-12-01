const vowelsSet = new Set(["a", "e", "i", "o", "u"]);

const isVowel = (s) => {
  return vowelsSet.has(s.toLowerCase());
};

var reverseVowels = function (s) {
  const result = [];
  const vowels = [];

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) vowels.push(s[i]);
    else result[i] = s[i];
  }

  for (let i = 0; i < s.length; i++) {
    if (!result[i]) result[i] = vowels.pop();
  }

  return result.join("");
};
