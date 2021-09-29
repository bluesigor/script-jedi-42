// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const words = str.toUpperCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    const precedingChars = words[i].slice(0, -1);
    const lastChar = words[i].slice(-1).toLowerCase();
    words[i] = precedingChars + lastChar;
  }
  return words.join(" ");
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

function topSecret(str) {
  var chars = str.split("");
  for (i = 0; i < chars.length; i++) {
    var tmp = chars[i].charCodeAt();
    if ((tmp > 67 && tmp < 91) || (tmp > 99 && tmp < 123)) tmp -= 3;
    else {
      if ((tmp < 68 && tmp > 64) || (tmp < 100 && tmp > 96)) tmp += 23;
    }
    chars[i] = String.fromCharCode(tmp);
  }
  return chars.join("");
}
//question1: The top secret file number is...
answer1 = "2397";
//question2: Super agent's name is...
answer2 = "zNup";
//question3: He stole the treasure is...
answer3 = "Toilet paper";

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  let string = s.trim();
  let result = "";
  for (let i = 1; i < 6; i++) {
    result += string.repeat(i) + "\n";
  }
  return result.trim();
}
