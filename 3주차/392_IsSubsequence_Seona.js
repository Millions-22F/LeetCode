var isSubsequence = function (s, t) {
  for (let i of s) {
    let idx = t.indexOf(i);
    if (idx === -1) return false;
    else t = t.slice(idx + 1);
  }
  return true;
};
