function returnlarger(arr, num) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(returnlarger([65, 16, 0, 6, 64, 1, 68], 16));
console.log(returnlarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50));
