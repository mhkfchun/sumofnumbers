const testList = [1, 2, 3];

let forSum = 0;
for (let i = 0; i <= testList.length - 1; i++) {
  forSum += testList[i];
}
console.log(forSum);

let whileSum = 0;
let whileI = 0;
while (whileI <= testList.length - 1) {
  whileSum += testList[whileI];
  whileI++;
}
console.log(whileSum);

const reLoop = function (list, n) {
  if (n <= 0) {
    return 0;
  }
  return (reLoop(list, n - 1)) + list[n - 1];
};

console.log(reLoop(testList, testList.length));

const unLoop = (data) => _.reduce(data, (memo, num) => memo + num);
console.log(unLoop(testList));
