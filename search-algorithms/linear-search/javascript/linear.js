function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Element found, return its index
        }
    }
    return -1; // Element not found
}

// Example usage:
let array = [5, 3, 8, 2, 9, 4];
let targetElement = 8;
let index = linearSearch(array, targetElement);
if (index !== -1) {
    console.log(`Element ${targetElement} found at index ${index}.`);
} else {
    console.log(`Element ${targetElement} not found.`);
}
