/*
Question Link
http://www.codewars.com/kata/transportation-on-vacation
*/

function rentalCarCost(d) {
  
    var normalCost = d * 40;
    
    var finalCost = d >= 3 && d < 7
                      ? normalCost - 20
                      : d >= 7
                        ? normalCost - 50
                        : normalCost;
    
    return finalCost;
    
  }