const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, 				upper); 
    return clampedValue;
	},
  inRange(number, start, end) {
    if (typeof end === 'undefined') {
      var end = start;
      var start = 0;
    }
    if (start > end) {
    var start = [end, end = start][0];
    }
   	let isInRange = (start <= number && number < end) ? 
      true: false; 
    return isInRange;
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) { 
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - 				string.length) / 2);
    let endPaddingLength = length - string.length - 			startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    var hasValue = object[key] != undefined;
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (let i in object) {
      let originalValue = object[i];
      invertedObject[originalValue] = i;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let i in object) {
      let value = object[i];
     	let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return i;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (typeof n === 'undefined') {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile (array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk (array, size) {
    if (typeof size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  } 
}; 


// Do not write or modify code below this line.
module.exports = _;