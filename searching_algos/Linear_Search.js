// === LINEAR SEARCH aka Sequential Search ===

// Strategy: Sequentially check every value in a list and compare it to the target value until a match is found. 

// Big O:
    // Time: O(n) - bad for large data sets.

// IMPLEMENTATION - various versions lienar search:
const nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0];

// From Scratch:
/**
 * Finds target value in list and returns the index where the value is tored. 
 * @param {Array} array Array to be searched.
 * @param {*} target Target value to find.
 * @returns Index where the value is stored. 
 */
const linearSearch = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return undefined;
}

// console.log(linearSearch(nums, 86));

// Javascript Included Functions that utilize linear search:

nums.indexOf(86);

nums.findIndex(function(item) {
    return item === 86;
});

nums.find(function(item) {
    return item === 86;
});

nums.includes(86);