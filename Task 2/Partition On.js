/*
Question Link
http://www.codewars.com/kata/partition-on
*/

function partitionOn(pred, items) {
    var obj = [];
    
    for(var i=items.length-1;i>=0;i--){
      if(!pred(items[i])){
        obj.push(items[i]);
        items.splice(i, 1);
      }
    }
    
    console.log('ITEMS ', items, 'OBJ ', obj.reverse());
    items.splice(0, 0, ...obj);
    
    return obj.length;
    }