// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

function shuffleIt(arr, ...swap) {
  for (const index of swap)
    [arr[index[0]], arr[index[1]]] = [arr[index[1]], arr[index[0]]];
  return arr;
}

//
