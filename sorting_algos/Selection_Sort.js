// === BUBBLE SORT ===

// Strategy: Scans list of items for the smallest element and swaps that element for the one in the first position. Loops repeatedly until all elements are sorted. 

// Best for: Nothing - terribly inefficient. 

// Big O:
    // Time: O(n^2)
    // Space: O(1)

// IMPLEMENTATION:
const nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0];

/**
 * Sorts values inefficiently in-place.
 * @param {*} array Array of values to be sorted. 
 * @returns Sorted Array.
 */
const selectionSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;    
    }
    return array;
}

console.log(selectionSort(nums));