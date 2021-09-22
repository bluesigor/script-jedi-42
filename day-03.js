//   http://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val) {
  if (val <= false) return "false";
  else if ((val > false, val > 0, val != false, val != undefined))
    return "true";
  else if (val != 0) return "false";
}


// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n){
  return n < 5 ? n*100 : n >= 5 && n < 10 ? n*95: n >= 10 ? n*90:"saleHotdogs"; 
}

// http://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(days) {
  switch (days) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
  }
  return days;
}
