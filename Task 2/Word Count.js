/*
Question Link
http://www.codewars.com/kata/word-count
*/

function countWords(str) {
    
    str = str.trim();
    
    return str.length === 0
      ? 0
      : str.split(/\s+/g).length;
    
  }