function convertHTML(str) {
  let strArray = str.split('');

  for(let i = 0; i < strArray.length; i++) {
    switch (strArray[i]) {
      case '&':
        strArray[i] = '&amp;';
        break;
      case '<':
        strArray[i] = '&lt;';
        break;
      case '>':
        strArray[i] = '&gt;';
        break;
      case '"':
        strArray[i] = '&quot;';
        break;
      case "'":
        strArray[i] = '&apos;';
        break;
    }
  }
  return strArray.join('');
}

convertHTML("Dolce & Gabbana");