// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

function solution(...arr){
 return [...new Set(arr)].length!=arr.length;
}

// https://www.codewars.com/kata/last

function last(list){
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
