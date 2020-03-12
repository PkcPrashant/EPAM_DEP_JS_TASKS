Array.prototype.square = function(){ return this.map( value => value*value ) };
Array.prototype.cube = function(){ return this.map( value => value*value*value ) };
Array.prototype.sum = function(){ 
  let sum = 0;
  this.forEach( value => sum += value );
  return sum;
};
Array.prototype.average = function(){ 
  let sum = 0, count = 0;
  this.forEach( value => {
    sum += value; 
    count++; 
  });
  return sum/ count;
};

Array.prototype.even = function(){ 
  let even = new Array();
  this.map( value => !(value%2) && even.push(value));
  return even;
};
Array.prototype.odd = function(){ 
  let odd = new Array();
  this.map( value => (value%2) && odd.push(value));
  return odd; 
};