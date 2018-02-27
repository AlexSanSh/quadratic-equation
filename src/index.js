module.exports = function solveEquation(equation) {
let equat = equation;
let indexBeforeA = equat.indexOf("* x^2");
let indexBeforeB = equat.indexOf('* x',indexBeforeA+1);
let A = +equat.substring(0,indexBeforeA);
let B_ = equat.substring(indexBeforeA+5,indexBeforeB);
let B = +B_.split(" ").join('');
let C_ = equat.substring(indexBeforeB+4);
let C = +C_.split(" ").join('');
const Descrim = Math.pow(B,2)-4*A*C;
const Numerator = -B-Math.sqrt(Descrim);
const Numerator2 = -B+Math.sqrt(Descrim);
const Denominator = 2*A;
const x1_2 = [];
const x1 = parseInt(Numerator/Denominator);
const x2 = parseInt(Numerator2/Denominator);
x1_2.push(x1);
x1_2.push(x2);
 return x1_2.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  });
};
