function testModuloTargetOnLoad(targetIndex) {
  const array = [1, 2, 3, 4, 5];
  const length = array.length;
  //   const targetIndex = 0;

  for (let i = 0; i < length * 2; i++) {
    const currentIndex = i % length;
    console.log(array[(currentIndex + targetIndex) % length]);
  }
}
testModuloTargetOnLoad(2);
