// Exercise 2 - Explain difference between array slice and splice.


// slice():
// Non-Destructive: slice() does not modify the original array. It returns a new array containing a shallow copy of the selected elements.
// Extraction: It allows you to extract a portion of an array based on the provided start and end indices (end index is exclusive).
// Returns New Array: slice() returns a new array with the extracted elements, leaving the original array unchanged.
// No Elements Removal: slice() does not remove any elements from the original array; it only creates a copy of the selected elements.

//EXAMPE OF SLICE
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

console.log("Array after using slice method=",slicedArray); // Output: [2, 3, 4]
console.log("Orignal array after sliceing=",originalArray); // Output: [1, 2, 3, 4, 5]

// splice()
// Destructive: splice() modifies the original array by adding, removing, or replacing elements.
// Modification: It allows you to modify the array by removing elements based on the provided start index and delete count.
// Returns Modified Array: splice() returns an array containing the removed elements. The original array is modified.
// Element Replacement/Addition: splice() allows you to replace removed elements with new items by providing additional parameters.

const originalArray1 = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2);

console.log("Array after using splice method=",removedElements); // Output: [2, 3]
console.log("Orignal array after using splice method=",originalArray1); // Output: [1, 4, 5]

