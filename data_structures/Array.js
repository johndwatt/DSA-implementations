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
}

const myArray = new ArrayImp();