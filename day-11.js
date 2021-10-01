//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  if (s1.size === s2.size) {
    for (const item of s1) {
      if (!s2.has(item)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  let c1 = [...new Set(arr1)].filter((v) => arr2.includes(v)).length;
  let c3 = [...new Set(arr1)].filter((v) => !arr2.includes(v)).length;
  let c4 = [...new Set(arr2)].filter((v) => !arr1.includes(v)).length;
  let c2 = c3 + c4;
  return [c1, c2, c3, c4];
}
