export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(cur => String.fromCharCode('a'.charCodeAt() + cur - 1));
}
