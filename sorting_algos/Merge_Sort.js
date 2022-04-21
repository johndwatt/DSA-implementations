// === MERGE SORT ===

// Strategy: Divides the list in half repeatedly until there are only pairs. Then compares the adjacent elements and sorts them, working its way back up comparing different sulists and sorting them until the entire list is sorted. 
    // Stable: Duplicate elements/elements with same sorting key will keep their original order in the output.

// Best for: Any time you are not worried about space complexity. Extremely efficient.

// Big O:
    // Time: O(n log n)
    // Space: O(n)

// IMPLEMENTATION:
const nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0];

/**
 * Efficiently sorts given array using a divide and conquer approach. 
 * @param {Array} array Array to be sorted. 
 * @returns Sorted array. 
 */
const mergeSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middle);
    const rightArr = array.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

/**
 * Merges the left and right sides together while comparing and sorting values.
 * @param {Array} left Left side of array to be merged.
 * @param {Array} right Right side to be merged.
 * @returns Merged Array.
 */
const merge = function (left, right) {
    const result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;
        } else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

console.log(mergeSort(nums));