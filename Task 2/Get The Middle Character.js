/*
Question Link
http://www.codewars.com/kata/get-the-middle-character
*/
function getMiddle(myString) {
  return myString.length % 2
    ? myString.substring(myString.length / 2, myString.length / 2 + 1)
    : myString.substring(myString.length / 2 - 1, myString.length / 2 + 1)
    ;
}