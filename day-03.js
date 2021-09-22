//   http://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val) {
  if (val <= false) return "false";
  else if ((val > false, val > 0, val != false, val != undefined))
    return "true";
  else if (val != 0) return "false";
}


// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else n <= 10;
  {
    return n * 90;
  }
}

// http://www.codewars.com/kata/572059afc2f4612825000d8a


// Few examps:

//firstExample
function howManydays(days){
  
  var dayNum;
  switch (days){
    case 1:
      dayNum=31;
    break;
      case 2:
      dayNum=28;
    break;
      case 3:
      dayNum=31;
    break;
      case 4:
      dayNum=30;
    break;
      case 5:
      dayNum=31;
    break;
      case 6:
      dayNum=30;
    break;
      case 7:
      dayNum=31;
    break;
      case 8:
      dayNum=31;
    break;
      case 9:
      dayNum=30;
    break;
      case 10:
      dayNum=31;
    break;
      case 11:
      dayNum=30;
    break;
      case 12:
      dayNum=31;
    break;
  }
   
  return dayNum;
}

//secondExample
function howManydays(days){
  
  var dayNum;
  switch (days){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayNum=31;
      
    break;
    case 2:  
      dayNum=28;
    break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayNum=30;
    break;
  }
   
  return dayNum;
}
