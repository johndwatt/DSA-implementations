// === ARRAY ===

// Definition: Ordered list of items stored sequentially in memory.

// Big O:
    // Lookup: O(1)
    // Push: O(1)
    // Insert: O(n)
    // Delete: O(n)
    // Search: O(n)

    // *Push/append can sometimes be O(n)

// IMPLEMENTATION:

class ArrayImp {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    /**
     * Get value at array index.
     * @param {Number} idx Index of array where value is stored.
     * @returns Value stored at index.
     */
    get(idx) {
        return this.data[idx];
    }

    /**
     * Store a value in array at next available index (end of the array).
     * @param {*} item Value to be stored in array.
     * @returns Array data in object. 
     */
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new ArrayImp();
console.log(myArray.push("bird"));
console.log(myArray.get(0));