function smallestMultiple(arr) {
  let min = Math.min(arr[0], arr[1]),
      max = Math.max(arr[0], arr[1]),
      range = [];
  
  for(let i = min; i <= max; i++) {
    range.push(i);
  }
  console.log(range);
  let lcm = range[0];
  console.log(lcm);
  
  for(let j = 1; j < range.length; j++) {
    console.log(range[j]);
    let GCD = gcd(lcm, range[j]);
    console.log(GCD);
    lcm = (lcm * range[j]) / GCD;
    console.log(lcm)
  }

  function gcd(a, b) {
    if(b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
} 

smallestMultiple([1, 5]);

console.log(4 % 2);
console.log(2 % 1);
console.log(1 % 3);
console.log(3 % 1);