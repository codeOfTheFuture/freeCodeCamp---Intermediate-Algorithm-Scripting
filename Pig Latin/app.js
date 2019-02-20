function translatePigLatin(str) {
  const vowelRegex = /[aeiou]/gi;

  if (str[0].match(vowelRegex)) {
    str = str + "way";

    return str;
  } else if (str.match(vowelRegex) === null) {
    str = str + "ay";

    return str;
  } else {
    const vowelIndex = str.indexOf(str.match(vowelRegex)[0]);

    console.log(vowelIndex);

    str = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";

    return str;
  }

  return str;
}

let test = translatePigLatin("california");
// test = translatePigLatin('xyz');

console.log(test);
