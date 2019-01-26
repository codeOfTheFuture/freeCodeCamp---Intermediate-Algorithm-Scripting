function steamrollArray(arr) {
  const flattened = [];

  function leveled(val) {
    if(Array.isArray(val) === true) {
      for(let i = 0; i < val.length; i++) {
        if(Array.isArray(val[i]) === false) {
          flattened.push(val[i]);
        } else {
          leveled(val[i]);
        }
      }
    } else {
      flattened.push(val);
    }
  }

  for(let j = 0; j < arr.length; j++) {
    leveled(arr[j]);
  }

  console.log(flattened);
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);