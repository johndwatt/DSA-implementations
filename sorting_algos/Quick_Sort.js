// === MERGE SORT ===

// Strategy: Selects a pivot, then sorts numbers higher or lower than the pivot on either side of the list. Once sorted around the pivot, lists are separated and sorted around another chosen pivot. Process is repeated until all values are sorted, then lists are compared and combined. 
    // Unstable: Duplicate elements/elements with same sorting key may have their order changed in the output list.

// Best for: Generally the fastest sorting algorithm, unless you cannot guarantee a good pivot. Use when you aren't worried about worst case.

// Big O:
    // Time: O(n^2)
    // Space: O(log n)

// IMPLEMENTATION:
const nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0];

const quickSort = function (array, left, right) {
    let pivot;
    let partitionIdx;

    if (left < right) {
        pivot = right;
        partitionIdx = partition(array, pivot, left, right);

        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }

    return array;
}

const partition = function(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIdx = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIdx);
            partitionIdx++;
        }
    }

    swap(array, right, partitionIdx);
    return partitionIdx;
}

const swap = function(array, firstIdx, secondIdx) {
    const temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
}

// Select first and last index as 2nd and 3rd parameters
console.log(quickSort(nums, 0, nums.length - 1));