// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr) {
  const shortest = [];
  for (let i = 0; i < arr.length; i++) {
    shortest.push(arr[i].length);
}
  const min = Math.min(...shortest);
  const cut = [];
  for (let i = 0; i < arr.length; i++) {
    cut.push(arr[i].slice(0, min));
}
  return cut;
}

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str, c) {
  const firstIndex = str.indexOf(c);
  if (firstIndex >= 0) {
    return str.lastIndexOf(c) - firstIndex;
  } else {
    return -1;
  }
}

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  let words = string.split(" ");
  let arr = [];
  let saparate = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i].split("").join(separator));
  }
  saparate = arr.join(" ");
  return saparate;
}
