/*
Question Link
http://www.codewars.com/kata/get-the-middle-character
*/
function getMiddle(s)
{
  return s.length%2
  ? s.substring(s.length/2, s.length/2 + 1)
  : s.substring(s.length/2 - 1, s.length/2 + 1)
  ;
}