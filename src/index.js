 
exports.min = function min (arr) {
if (arr === undefined || arr.length < 1){
  return 0;
} else {
  let min = arr[0];
  arr.forEach(item => {
    if (item < min) {
      min = item;
    }
  });
  return min;
}
  
}

exports.max = function max (arr) {
 if (arr === undefined || arr.length < 1){
  return 0;
} else {
  let max = arr[0];
  arr.forEach(item => {
    if (item > max) {
      max = item;
    }
  });
  return max;
  
}
}

exports.avg = function avg (arr) {
  if (arr === undefined || arr.length < 1){
    return 0;
  } else {
 return arr.reduce((sum, i) => sum + i) / arr.length;
    
  }
}
