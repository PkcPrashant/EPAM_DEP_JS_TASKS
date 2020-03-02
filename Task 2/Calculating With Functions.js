/*
Question Link
http://www.codewars.com/kata/calculating-with-functions
*/

function zero() { return !arguments.length ? 0 : arguments[0](0); }
function one() { return !arguments.length ? 1 : arguments[0](1); }
function two() { return !arguments.length ? 2 : arguments[0](2); }
function three() { return !arguments.length ? 3 : arguments[0](3); }
function four() { return !arguments.length ? 4 : arguments[0](4); }
function five() { return !arguments.length ? 5 : arguments[0](5); }
function six() { return !arguments.length ? 6 : arguments[0](6); }
function seven() { return !arguments.length ? 7 : arguments[0](7); }
function eight() { return !arguments.length ? 8 : arguments[0](8); }
function nine() { return !arguments.length ? 9 : arguments[0](9); }

function plus(value1) {
  return function (value2) {
    return value2 + value1;
  }
}
function minus(value1) {
  return function (value2) {
    return value2 - value1;
  }
}
function times(value1) {
  return function (value2) {
    return value2 * value1;
  }
}
function dividedBy(value1) {
  return function (value2) {
    return Math.floor(value2 / value1);
  }
}