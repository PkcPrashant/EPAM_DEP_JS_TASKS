function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      (function(){
        var functionIndex = i;
        callbacks.push(function() {
          return functionIndex;
        });
      })()
    }
    
    return callbacks;
  }