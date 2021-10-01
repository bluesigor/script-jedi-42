// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

function wordToBin(str) {
  const array = [];
  for (let i = 0; i < str.length; i++)
    array.push(0 + str[i].charCodeAt().toString(2));
  return array;
}

//https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

function calc(x) {
  let str = "";
  let differ = 0;
  for (let i = 0; i < x.length; i++) {
    str += x.charCodeAt(i);
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7") {
      differ += 6;
    }
  }
  return differ;
}
