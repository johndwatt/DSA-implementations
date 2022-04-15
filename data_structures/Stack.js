// === STACK ===

// Definition: A last in first out data structure where only the most recently added item can be easily accessed or changed.

// Big O:
    // Lookup: O(n)
    // Pop: O(1)
    // Push: O(1)
    // Peek: O(1)

// IMPLEMENTATION - Array:
class MyStack {
    constructor() {
        this.array = []
    }

    /**
     * Retrieves value of item at the top of the stack.
     * @returns Value at the top of the stack.
     */
    peek() {
        return this.array[this.array.length - 1];
    }

    /**
     * Adds an item to the top of the stack. 
     * @param {*} item Value to be added to the top of the stack.
     * @returns Updated stack. 
     */
    push(item) {
        this.array.push(item);
        return this;
    }
}

const stackTest = new MyStack();
console.log(stackTest.push("Bird"));
console.log(stackTest.push("Plane"));
console.log(stackTest.peek());


