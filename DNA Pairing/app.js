function pairElement(str) {
  const result = [];
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
      result.push(['A', 'T']);
    } else if (arr[i] === 'T') {
      result.push(['T', 'A']);
    } else if (arr[i] === 'C') {
      result.push(['C', 'G']);
    } else {
      result.push(['G', 'C']);
    }
  }

  return result;
}

pairElement("GCG");