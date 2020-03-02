/*
Question Link
http://www.codewars.com/kata/partition-on
*/

function partitionOn(predicate, items) {
  var storeFalsePredItems = [];

  for (var itemIndex = items.length - 1; itemIndex >= 0; itemIndex--) {
    if (!predicate(items[itemIndex])) {
      storeFalsePredItems.push(items[itemIndex]);
      items.splice(itemIndex, 1);
    }
  }

  items.splice(0, 0, ...storeFalsePredItems.reverse());

  return storeFalsePredItems.length;
}