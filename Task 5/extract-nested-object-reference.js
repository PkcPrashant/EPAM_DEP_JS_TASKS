Object.prototype.hash = function (properties) {
  const propertiesList = properties.split(".");
  let mainObj = this;
  for (let i = 0; i < propertiesList.length; i++) {
    !!mainObj && (mainObj = mainObj[propertiesList[i]]);
  }
  return mainObj;
}
