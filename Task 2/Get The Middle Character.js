/*
Question Link
http://www.codewars.com/kata/get-the-middle-character
*/
function getMiddle(inputString) {
  var strLengthByTwo = inputString.length / 2;
  return inputString.length % 2
    ? inputString.substring(strLengthByTwo, strLengthByTwo + 1)
    : inputString.substring(strLengthByTwo - 1, strLengthByTwo + 1)
    ;
}