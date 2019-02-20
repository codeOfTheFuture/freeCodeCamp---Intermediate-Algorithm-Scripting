Array.prototype.last = function() {
  return this[this.length -1]
};

Array.prototype.nextToLast = function() {
  return this[this.length -2];
};

function sumFibs(num) {
  const fibNums = [1, 1];

  while(fibNums.nextToLast() + fibNums.last() <= num) {
    fibNums.push(fibNums.nextToLast() + fibNums.last());
  }

  const result = fibNums.filter(num => num % 2 !== 0)
    .reduce((a, b) => a + b);

  return result;
}

sumFibs(4);