Array.prototype.square = function(){ return this.map( value => value*value ) };
Array.prototype.cube = function(){ return this.map( value => value*value*value ) };
Array.prototype.sum = function(){ return this.reduce((sum, value) => sum+value, 0) };
Array.prototype.average = function(){ return (this.sum()/ this.length) };
Array.prototype.even = function(){ return this.filter( value => !(value%2)) };
Array.prototype.odd = function(){ return this.filter( value => !(value%2)) };