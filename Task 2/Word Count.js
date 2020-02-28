/*
Question Link
http://www.codewars.com/kata/word-count
*/

function countWords(myString) {
  myString = myString.trim();
  return myString.length === 0
    ? 0
    : myString.split(/\s+/g).length;

}