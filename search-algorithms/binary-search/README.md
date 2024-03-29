## Binary Search Algorithm in JavaScript

This project provides a JavaScript implementation of the binary search algorithm. 

### Introduction

Binary search is a highly efficient search technique that works on sorted arrays. It repeatedly halves the portion of the array to be searched by comparing the target value with the middle element. This process continues until the target is found or it's determined the target doesn't exist in the array.

### Implementation

The `binarySearch` function takes a sorted array and a target value as arguments. It returns the index of the target value if found, otherwise it returns -1.

```javascript
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Calculate the middle index
    let middle = Math.floor((start + end) / 2);

    // Check if target is present at middle
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      // If target is greater, ignore left half
      start = middle + 1;
    } else {
      // If target is smaller, ignore right half
      end = middle - 1;
    }
  }

  // If we reach here, the target was not present
  return -1;
}
