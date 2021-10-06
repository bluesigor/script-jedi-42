// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript

function countGrade(scores) {
  return {
    S: scores.filter((x) => x >= 100).length,
    A: scores.filter((x) => x >= 90).filter((x) => x < 100).length,
    B: scores.filter((x) => x >= 80).filter((x) => x < 90).length,
    C: scores.filter((x) => x >= 60).filter((x) => x < 80).length,
    D: scores.filter((x) => x >= 0).filter((x) => x < 60).length,
    X: scores.filter((x) => x == -1).length,
  };
}
// https://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  let a = 0,
    b = 0;
  arr.some((x, i) => {
    a = arr[i];
    b = arr[i + 1];
    if (i + 1 < arr.length) {
      return a.toString() === b.toString().split("").reverse().join("");
    } else {
      a = -1;
      b = -1;
    }
  });
  return [a, b];
}
// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join(">");
}
