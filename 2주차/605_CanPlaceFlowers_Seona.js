var canPlaceFlowers = function (flowerbed, n) {
  const newArr = flowerbed.join("").split("1");
  let available = 0;

  if (newArr.length === 1 && newArr[0].length === 1) available++;

  for (let i in newArr) {
    if ((i === "0" || i === newArr.length - 1 + "") && newArr[i].length >= 2)
      available++;
    if (newArr[i].length > 2) available += ~~((newArr[i].length - 1) / 2);
  }

  return available >= n;
};
