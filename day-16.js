// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(arr) {
  const numsArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    numsArr.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return numsArr;
}

// https://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  return arr.slice().sort((x, y) => {
    const countA = arr.filter((value) => value === x).length;
    const countB = arr.filter((value) => value === y).length;
    if (countA === countB) {
      return y - x;
    } else if (countA > countB) {
      return 1;
    } else {
      return -1;
    }
  });
}

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr){
  return arr.map(value =>{
  if (value.length%2==0){return value.slice(0,value.length/2)+'|'+value.slice(value.length/2)};
  if (value.length%2!==0){return value.slice(0,value.length/2)+'|'+value.slice((value.length/2)+1)};
  })
}
