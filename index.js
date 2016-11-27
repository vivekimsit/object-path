'use strict';

function isPrimitive (val) {
  return val === null || ["object","function"].indexOf(typeof val) === -1;
}

module.exports = function findPrimitives(obj, callback, propName, path=[]) {
  let keys;

  if(typeof callback !== "function") {
    throw new TypeError(`Callback should be function got: ${typeof callback}`);
  }
  if (typeof obj === "object") {
    keys = Object.keys(obj);
  } else {
    if( isPrimitive(obj) ) {
      return callback(obj, propName, path); 
    }
    else { return false; }
  }

  path.push(propName);

  for(let name of keys){
    if (isPrimitive(obj[name]) ) {
      if (callback(obj[name], name, path)) {
        return true;
      }
    } else {
      if (findPrimitives(obj[name], callback, name, path)) {
        return true;
      }
    }
  }
  path.pop();

  return false;
};
