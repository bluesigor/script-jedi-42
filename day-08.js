//  https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  const input = "Input number is ";
  if (n === 100) return input + 100;
  if (n === Number.MAX_VALUE) return input + "Number.MAX_VALUE";
  if (n === Number.MIN_VALUE) return input + "Number.MIN_VALUE";
  if (n === Number.NEGATIVE_INFINITY) return input + "Number.NEGATIVE_INFINITY";
  if (n === Number.POSITIVE_INFINITY) return input + "Number.POSITIVE_INFINITY";
  if (Number.isNaN(n)) return input + "Number.NaN";
  if (Number.isSafeInteger(n)) return input + n;
}
//  https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);

  if (r < 16) red = "0" + red;
  if (g < 16) green = "0" + green;
  if (b < 16) blue = "0" + blue;
  return "#" + red + green + blue;
}

// https://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toFixed(2) < n) result++;
  }
  return result;
}


