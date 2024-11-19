const permutation = (selectedArr, unselectedArr) => {
  if (unselectedArr.length === 0) {
    //종료조건}
  }
  unselectedArr.forEach((element, index, arr) => {
    const unselect = [...unselectedArr.slice(0, index), ...unselectedArr.slice(index + 1)];
    permutation([...selectedArr, element], unselect);
  });
};
