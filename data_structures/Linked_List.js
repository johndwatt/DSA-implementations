// === Linked List ===

// Definition: A series of nodes that contain stored values and a pointer that points to the next node in the list.

// Singly vs Doubly Linked List: Doubly linked lists also contain a prev property that points to the previous node in the list. 

// Big O:
    // Lookup: O(n)
    // Prepend: O(1)
    // Append: O(1)
    // Insert: O(n)
    // Delete: O(n)

// IMPLEMENTATION - Singly Linked List:
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * Adds node with given value to the end of the linked list.
     * @param {*} value Value to be appended to linked list.
     * @returns Updated linked list. 
     */
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    /**
     * Adds node with given value to the start of the linked list.
     * @param {*} value Value to be prepended to linked list.
     * @returns Updated linked list. 
     */
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    /**
     * Traverses to node at given index and returns the node found.
     * @param {Number} index Index of node to traverse to. 
     * @returns Found node. 
     */
    traverseToIndex(index) {
        if (index >= this.length) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    /**
     * Traverses to node at given index and inserts new node with value into list.
     * @param {Number} index Index of node to traverse to. 
     * @param {*} value Value to be inserted into linked list.
     * @returns Updated linked list. 
     */
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const pointer = leader.next;
        leader.next = newNode;
        newNode.next = pointer;
        this.length++;
        return this;
    }

    /**
     * Print the list of values stored in linked list.
     * @returns Array of values in linked list. 
     */
    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    /**
     * Removes a node at given index from the linked list.
     * @param {Number} index Index of node to traverse to. 
     * @returns List of values. 
     */
    remove(index) {
        if (index >= this.length) {
            return null;
        }
        const leader = this.traverseToIndex(index - 1);
        const toDelete = leader.next;
        leader.next = toDelete.next;
        this.length--;
        return this.printList();
    }

    /**
     * Reverses the order of values in the linked list. 
     * @returns List of values. 
     */
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

// const myLinkedList = new LinkedList("bird");
// console.log(myLinkedList);
// console.log(myLinkedList.append("plane"));
// console.log(myLinkedList.prepend("superman"));
// console.log(myLinkedList.insert(1, "check insert"));
// console.log(myLinkedList.remove(1));
// console.log(myLinkedList.reverse());


// IMPLEMENTATION - Doubly Linked List:
class NodeTwo {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new NodeTwo(value);
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * Adds node with given value to the end of the linked list.
     * @param {*} value Value to be appended to linked list.
     * @returns Updated linked list. 
     */
    append(value) {
        const newNode = new NodeTwo(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    /**
     * Adds node with given value to the start of the linked list.
     * @param {*} value Value to be prepended to linked list.
     * @returns Updated linked list. 
     */
    prepend(value) {
        const newNode = new NodeTwo(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    /**
     * Traverses to node at given index and returns the node found.
     * @param {Number} index Index of node to traverse to. 
     * @returns Found node. 
     */
     traverseToIndex(index) {
        if (index >= this.length) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    /**
     * Traverses to node at given index and inserts new node with value into linked list.
     * @param {Number} index Index of node to traverse to. 
     * @param {*} value Value to be inserted into linked list.
     * @returns Updated linked list. 
     */
     insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        const newNode = new NodeTwo(value);
        const leader = this.traverseToIndex(index-1);
        const pointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = pointer;
        pointer.prev = newNode;
        this.length++;
        return this;
    }

    /**
     * Print the list of values stored in linked list.
     * @returns Array of values in linked list. 
     */
     printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    /**
     * Removes a node at given index from the linked list.
     * @param {Number} index Index of node to traverse to. 
     * @returns List of values. 
     */
     remove(index) {
        if (index >= this.length) {
            return null;
        }
        const leader = this.traverseToIndex(index - 1);
        const toDelete = leader.next;
        const follower = toDelete.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this.printList();
    }
}

const myDoublyLinkedList = new DoublyLinkedList("bird");
console.log(myDoublyLinkedList.append("plane"));
console.log(myDoublyLinkedList.append("superman"));
console.log(myDoublyLinkedList.prepend("what is that?"));
console.log(myDoublyLinkedList.insert(1, "it's a..."));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.remove(1));
console.log(myDoublyLinkedList)