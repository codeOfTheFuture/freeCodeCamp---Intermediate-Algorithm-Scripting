function uniteUnique() {
  let args = [...arguments],
      localArray = [];
  
  for(let i = 0; i < args.length; i++) {
    localArray.push(...args[i]);
  }
  
  let uniqueArray = localArray.filter((item, pos, localArray) => 
  localArray.indexOf(item) === pos);
  
  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);