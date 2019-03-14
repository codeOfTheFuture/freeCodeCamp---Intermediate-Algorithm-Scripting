function orbitalPeriod(arr) {
  let GM = 398600.4418,
      earthRadius = 6367.4447,
      result = [];

  for(let i = 0; i < arr.length; i++) {
    let orbitalPeriod = Math.round(2 * Math.PI *
        Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));

    result.push({name: arr[i].name, orbitalPeriod: orbitalPeriod});
  }

  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);