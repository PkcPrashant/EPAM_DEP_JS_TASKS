/*
Question Link
http://www.codewars.com/kata/basic-mathematical-operations
*/

function basicOp(operation, value1, value2)
{
  var do_operation = {
    '+': function (value1, value2) {return value1 + value2 ;},
    '-': function (value1, value2) {return value1 - value2 ;},
    '*': function (value1, value2) {return value1 * value2 ;},
    '/': function (value1, value2) {return value1 / value2 ;},
  }
  
  return do_operation[operation](value1, value2);
  
}