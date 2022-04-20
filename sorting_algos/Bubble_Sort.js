// === BUBBLE SORT ===

// Strategy: Bubble up the largest value by passing through the data multiple times. 

// Best for: Nothing - terribly inefficient. 

// Big O:
    // Time: O(n^2)
    // Space: O(1)

// IMPLEMENTATION:
const nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0];

/**
 * Sorts values inefficiently in-place.
 * @param {Array} array Array of values to be sorted. 
 * @returns Sorted Array.
 */
const bubbleSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                // Swaps Numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(nums));