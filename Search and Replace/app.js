function myReplace(str, before, after) {
  let x = str.indexOf(before);
 
  if(str[x] === str[x].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
 
  str = str.replace(before, after);
 
  return str;
 }
 
 console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
 
 console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
 
 console.log(myReplace("His name is Tom", "Tom", "john"));
 
 console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));