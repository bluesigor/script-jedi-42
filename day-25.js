// http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function(context,...args) {
  return this.apply(context, args);
}

// https://www.codewars.com/kata/anonymous-returns

const alpha = {
  name: "My Alpha",
  getNameFunc: function (name) {
    return function () {
      return alpha.name;
    };
  },
};
