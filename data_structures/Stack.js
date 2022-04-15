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
        return this.array;
    }

    /**
     * Removes an item from the top of the stack. 
     * @returns Updated stack. 
     */
    pop() {
        this.array.pop();
        return this.array;
    }
}

// const stackTest = new MyStack();
// console.log(stackTest.push("Bird"));
// console.log(stackTest.push("Plane"));
// console.log(stackTest.peek());
// console.log(stackTest.push("delete me"));
// console.log(stackTest.peek());
// console.log(stackTest.pop());
// console.log(stackTest);


// IMPLEMENTATION - Linked List:

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyStackTwo {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    /**
     * Retrieves value of item at the top of the stack.
     * @returns Value at the top of the stack.
     */
    peek() {
        return this.top;
    }

    /**
     * Adds an item to the top of the stack. 
     * @param {*} item Value to be added to the top of the stack.
     * @returns Updated stack. 
     */
    push(item) {
        const newNode = new Node(item);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const pointer = this.top;
            this.top = newNode;
            this.top.next = pointer;
        }
        this.length++;
        return this;
    }
}

const stackTestTwo = new MyStackTwo();
console.log(stackTestTwo)
console.log(stackTestTwo.push("bird"))
console.log(stackTestTwo.push("plane"))
console.log(stackTestTwo.peek())
