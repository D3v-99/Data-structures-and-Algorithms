
function bubbleSort(arr) {
  //j and i are indexes
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i- 1; j++) {
      if (arr[j] > arr[j +1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1]; //j is now the value in index j + 1
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr));