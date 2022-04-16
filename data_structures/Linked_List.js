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
}

const myLinkedList = new LinkedList("bird");
console.log(myLinkedList);
console.log(myLinkedList.append("plane"));
console.log(myLinkedList.prepend("superman"));
console.log(myLinkedList.insert(1, "check insert"));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, "check insert"));
console.log(myLinkedList.printList());