var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], 0);

    map.set(arr[i], map.get(arr[i]) + 1);
  }

  const set = new Set();

  for (const num of map.values()) {
    if (set.has(num)) return false;

    set.add(num);
  }

  return true;
};
