function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      alphabet = alphabet.split('');
      str = str.split(''),
      x = str[0],
      y = alphabet.indexOf(x),
      z = str.length,
      alphabet = alphabet.splice(y, z);

  for(let i = 0; i < alphabet.length; i++) {
    if(str[i] !== alphabet[i]) {
      console.log(alphabet[i]);
      return alphabet[i];
    }
  }
}

fearNotLetter("stvwx");
