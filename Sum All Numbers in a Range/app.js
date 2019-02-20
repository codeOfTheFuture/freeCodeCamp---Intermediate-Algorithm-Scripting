function sumAll(arr) {
  let newNumArray = arr.sort((a,b) => a-b),
        num1 = newNumArray[0],
        num2 = newNumArray[1];

  while(num2 > num1+1) {
    num2--;
    newNumArray.push(num2);
  }

  return newNumArray.reduce((total, num) => total + num);
}

sumAll([1, 4]);