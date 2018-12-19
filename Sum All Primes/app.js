function sumPrimes(num) {
  const primes = [];
  for(let i = 2; i <= num; i++) {
    if(isPrimeNum(i)) {
      primes.push(i);
    }
  }
  const sum = primes.reduce((a, b) => a + b);

  return sum;
}
function isPrimeNum(num) {
  for(let j = 2; j < num; j++ ) {
    if(num % j === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);