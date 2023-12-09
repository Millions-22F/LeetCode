var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;

    const noLeftFlower = i === 0 || flowerbed[i - 1] === 0;
    const noRightFlower = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (noLeftFlower && noRightFlower) {
      n--;
      flowerbed[i] = 1;
    }

    if (n === 0) return true;
  }

  return n > 0 ? false : true;
};
