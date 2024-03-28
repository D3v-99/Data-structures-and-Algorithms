## Binary Search in a Sorted Array

This document describes a function to search for an element in a sorted array efficiently using binary search.

**Problem Statement**

Given a sorted array `arr[]` in ascending order of size `N` and an integer `K`, check if `K` is present in the array or not.

**Examples**

**Example 1:**

* Input: `N = 5, K = 6, arr[] = {1, 2, 3, 4, 6}`
* Output: `1`
* Explanation: Since 6 is present in the array at index 4 (0-based indexing), the output is 1.

**Example 2:**

* Input: `N = 5, K = 2, arr[] = {1, 3, 4, 5, 6}`
* Output: `-1`
* Explanation: Since 2 is not present in the array, the output is -1.

**Your Task:**

Implement the function `searchInSorted(arr, N, K)` that takes the sorted array `arr`, its size `N`, and the element `K` as input parameters. The function should return 1 if `K` is present in the array, else it returns -1.

**Expected Time Complexity:** O(Log N) (achieved using binary search)
**Expected Auxiliary Space:** O(1) (constant space usage)

**Constraints:**

* 1 <= `N` <= 10<sup>6</sup> (1 million)
* 1 <= `K` <= 10<sup>6</sup> (1 million)
* 1 <= `arr[i]` <= 10<sup>6</sup> (1 million)

**Explanation**

The provided prompt requires us to search for an element in a sorted array efficiently. Since the array is sorted, we can leverage the **binary search** algorithm. This technique repeatedly divides the search interval in half until the target element is found or the interval becomes empty, resulting in a time complexity of O(Log N).

**JavaScript Implementation**

```javascript
function searchInSorted(arr, N, K) {
  let low = 0;
  let high = N - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === K) {
      return 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
