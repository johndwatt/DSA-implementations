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
}

const myLinkedList = new LinkedList("bird");
console.log(myLinkedList);
console.log(myLinkedList.append("plane"));
console.log(myLinkedList.prepend("superman"));