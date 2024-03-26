## Linear Search

This document describes the linear search algorithm and its implementation.

### Description

Linear search is a simple search algorithm that iterates through a list of items one by one, comparing each item with the target value. If a match is found, the index of the matching item is returned. If the entire list is traversed without finding a match, the algorithm returns -1 (or some other indication of failure depending on your implementation).

### Time Complexity

* **Average:** O(n) - In the average case, the algorithm needs to iterate through half of the list on average to find the target element.
* **Worst:** O(n) - In the worst case, where the target element is not present or is located at the end of the list, the algorithm needs to iterate through the entire list.
* **Best:** O(1) - In the best case, where the target element is the first element in the list, the algorithm finds it in a single iteration.

### Implementation
1 . Javscript [javascript](javascript)
2 . c++ [c++](c++)