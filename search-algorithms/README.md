# Search Algorithms

This document provides implementations for various search algorithms in [your programming language]. Search algorithms are fundamental tools used to locate specific elements within a data structure.

## Linear Search

Linear search is a simple algorithm that iterates through a list one item at a time, comparing each element with the target value. If a match is found, the index of the matching item is returned. 

**Description:**

* Linear search examines each element of the data structure sequentially.
* If a match is found, the search terminates and returns the index of the matching element.
* If the entire list is traversed without finding a match, the search returns -1 (or some other indication of not found, depending on your implementation).

**Time Complexity:**

* Average: O(n) - On average, the algorithm needs to iterate through half of the list to find the target element.
* Worst: O(n) - In the worst case (target element is not present or at the end), the algorithm iterates through the entire list.
* Best: O(1) - In the best case (target element is the first element), the algorithm finds it in a single iteration.

