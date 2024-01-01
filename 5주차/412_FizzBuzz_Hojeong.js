var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let el = "";

    if (i % 3 === 0) el += "Fizz";
    if (i % 5 === 0) el += "Buzz";
    if (!el) el = String(i);

    result.push(el);
  }

  return result;
};
