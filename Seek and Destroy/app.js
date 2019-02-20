function destroyer(arr) {
  let a = Array.prototype.slice.call(arguments),
      b = [];
      a.splice(0, 1);

  for(let i = 0; i < arr.length; i++) {
    if(a.indexOf(arr[i]) === -1) {
      b.push(arr[i]);
    }
  }
  console.log(b);
  return b;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));