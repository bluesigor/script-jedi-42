// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

function shuffleIt(arr, ...swap) {
  for (const index of swap)
    [arr[index[0]], arr[index[1]]] = [arr[index[1]], arr[index[0]]];
  return arr;
}

//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/


//https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript

function infiniteLoop(arr, d, n) {
  for (let i = 1; i <= n; i++) {
    if (d === "left") {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === "right") {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}
