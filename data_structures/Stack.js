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
     * Returns item at the top of the stack.
     */
    peek() {
        return this.array[this.array.length - 1];
    }
}

const stackTest = new MyStack();
