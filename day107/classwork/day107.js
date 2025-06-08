function processNumbers(a, b, ...rest) {
  console.log(a * b);
  const restSum = rest.reduce((acc, num) => acc + num, 0);
  console.log(restSum);
}
processNumbers(2, 3, 4, 5, 6);

const list1 = [1, 2, 3];
const list2 = [4, 5];
const list3 = [6, 7, 8, 9];
const combinedList = [
  ...list1,
  ...list2,
  ...list3,
  10, 11, 12, 13, 14
];
console.log(combinedList);