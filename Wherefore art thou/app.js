function whatIsInAName(collection, source) {
  const array = collection.filter(obj => {
    for(let i in source) {
      if(source[i] !== obj[i]) {
        return false;
      }
    }
    return true;
  });
  return array;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });