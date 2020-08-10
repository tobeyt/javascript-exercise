function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(cur => cur % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return Array.from(new Set(collection));
  // return collection.filter((cur, index, arr) => arr.indexOf(cur) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
