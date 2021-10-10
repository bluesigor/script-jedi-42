//https://www.codewars.com/kata/573e6831e3201f6a9b000971/train/javascript



// https://www.codewars.com/kata/573fb9223f9793e485000453/train/javascript

const regex = /(\d)(?=(\d{3})+$)/g;
function addCommas(money, reg) {
  return money.replace(reg, (x) => x + ",");
}
