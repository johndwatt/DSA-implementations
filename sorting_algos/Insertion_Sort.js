// === INSERTION SORT ===

// Strategy: Checks each item sequentially and inserts it where it should go in relation to the items already checked.

// Best for: When the list is mostly sorted already or with very small samples. Otherwise, inefficient. 

// Big O:
    // Time: O(n^2) / O(n) best case with good conditions
    // Space: O(1)

// IMPLEMENTATION:
const nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0];

/**
 * Sorts array of values inefficiently in-place.
 * @param {Array} array Array of values to be sorted.
 * @returns Sorted Array.
 */
const insertionSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            if (array[i] < array[i - 1]) {
                for (let j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
    return array;
}

console.log(insertionSort(nums));