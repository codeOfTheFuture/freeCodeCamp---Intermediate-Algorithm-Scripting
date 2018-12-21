function dropElements(arr, func) {
  // Drop them elements.
  let x = arr.map(func);
  
  for(let i = 0; i < x.length; i++) {
    if(x[i] === true) {
      break;
    } else {
      arr.shift(i);
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });