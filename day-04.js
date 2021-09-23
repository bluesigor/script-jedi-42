// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  let i = 0;
  while (i < n) {
    if (i % 2 === 1) {
      str = str + "*";
    } else {
      str = "*" + str;
    }
    i++;
  }
  return str;
}

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}

//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript











//https://www.codewars.com/kata/5722b3f0bd5583cf44001000





