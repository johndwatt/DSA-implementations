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

    /**
     * Deletes the last item in the array.
     * @returns The deleted item.
     */
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    /**
     * Delete item at index and shift items in array to new indicies.
     * @param {Number} index Index of value to be deleted. 
     * @returns The deleted item.
     */
    deleteAtIndex(idx) {
        const item = this.data[idx];
        for (let i = idx; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const myArray = new ArrayImp();
console.log(myArray.push("bird"));
console.log(myArray.get(0));
console.log(myArray.push("plane"));
console.log(myArray.push("delete me?"));
console.log(myArray.pop());
console.log(myArray.data);
console.log(myArray.push("delete me2"));
console.log(myArray.push("superman"));
console.log(myArray.push("clark kent"));
console.log(myArray.deleteAtIndex(2));
console.log(myArray.data);