export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(cur => cur.startsWith('粤A')).length;
}
