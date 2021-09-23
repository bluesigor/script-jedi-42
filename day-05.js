//https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  return body.endsWith(tail);
}

//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "\u00A3" + salary * 10;
  } else {
    return "\u00A3" + salary;
  }
}

//https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  const num = n + "";
  const square = n ** 2 + "";
  if (square.endsWith(num)) return "Automorphic";
  else return "Not!!";
}
