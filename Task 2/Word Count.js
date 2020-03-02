/*
Question Link
http://www.codewars.com/kata/word-count
*/

function countWords(inputString) {
  inputString = inputString.trim();
  return inputString.length === 0
    ? 0
    : inputString.split(/\s+/g).length;

}