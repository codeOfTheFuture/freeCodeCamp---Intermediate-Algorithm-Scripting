function spinalCase(str) {
  str = str.replace(/([A-Z])/g, ' $1').trim();

  let a = str.split(' ').join('-');
      a = a.replace(/([A-Z])/g, ' $1');
  let b = a.split(' ').join(''),
      c = b.split('_').join(''),
      d = c.split('--').join('-');
  d = d.toLowerCase();
  
  return d;
}

spinalCase('The_Andy_Griffith_Show');
spinalCase('thisIsSpinalTap');
spinalCase('AllThe-small Things');