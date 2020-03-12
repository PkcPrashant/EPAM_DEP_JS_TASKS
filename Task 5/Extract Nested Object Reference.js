Object.prototype.hash = function(string) {
    var properties = string.split( "." );
    var mainObj = this;
    for (let i = 0; i < properties.length; i++ ) {
      !!mainObj && (mainObj = mainObj[properties[i]]);
    }
    return mainObj;
  }
  