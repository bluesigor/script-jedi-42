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
//  https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/solutions/javascript


