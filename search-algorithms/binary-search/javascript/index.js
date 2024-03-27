function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      // Check if the middle element is the target
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          // If target is greater, update start to search in the right half
          start = mid + 1;
      } else {
          // If target is smaller, update end to search in the left half
          end = mid - 1;
      }
  }

  // If target is not found, return -1
  return -1;
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const index = binarySearch(array, target);

if (index !== -1) {
  console.log(`Target ${target} found at index ${index}.`);
} else {
  console.log(`Target ${target} not found in the array.`);
}
