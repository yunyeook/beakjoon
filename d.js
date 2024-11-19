let s = new Set();
s.add(1);
s.add(2);
s.add(3);
let ss = new Set();
ss.add(1);
ss.add(5);

ss.forEach(elm => {
  s.add(elm);
});
console.log(s);
