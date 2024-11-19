const combination = (selectedArr, unselectedArr) => {
  if (unselectedArr.length === 0) {
  }

  unselectedArr.forEach((element, index) => {
    const unselect = [...unselectedArr.slice(index + 1)]; //뒤의 것만 선택지로 두면됨.
    combination([...selectedArr, element], unselect);
  });
};
