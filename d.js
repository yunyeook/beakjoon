let obj = {
  1: { adj: new Set() },
};
obj[1].adj.add(1);
obj[1].adj.add(2);
obj[1].adj.add(3);

obj[1].adj.forEach(e => {
  console.log(e);
});
