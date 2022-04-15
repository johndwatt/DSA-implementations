// === STACK ===

// Definition: A first in first out data structure where only the earliest added item can be easily accessed or changed.

// Big O:
    // Lookup: O(n)
    // Enqueue: O(1)
    // Dequeue: O(1)
    // Peek: O(1)

// IMPLEMENTATION:
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
}