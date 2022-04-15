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
}