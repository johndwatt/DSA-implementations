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

    /**
     * Retrieves value of the earliest added item at the start of the queue.
     * @returns Value at the start of the queue.
     */
    peek() {
        return this.first;
    }

    /**
     * Adds an item to the end of the queue. 
     * @param {*} item Value to be added to the end of the queue.
     * @returns Updated queue. 
     */
    enqueue(item) {
        const newNode = new Node(item);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // add newNode to current last node's "next" value
            this.last.next = newNode;
            // update last to have the new node
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Removes an item from the start of the queue. 
     * @returns Updated queue. 
     */
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.last === this.first) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("bird"));
console.log(myQueue.enqueue("plane"));
console.log(myQueue.enqueue("superman"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("delete me"));
console.log(myQueue.dequeue());
console.log(myQueue);

