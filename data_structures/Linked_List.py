# Linked List

# Definition: A series of nodes that contain stored values and a pointer that points to the next node in the list.

# Singly vs Doubly Linked List: Doubly linked lists also contain a prev property that points to the previous node in the list.

# Big O:
#     Lookup: O(n)
#     Prepend: O(1)
#     Append: O(1)
#     Insert: O(n)
#     Delete: O(n)

# IMPLEMENTATION - Singly Linked List:


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self, value):
        self.head = Node(value)
        self.tail = self.head
        self.length = 1

    def __str__(self):
        """Prints the attributes of the class object in a dictionary format."""
        return str(self.__dict__)

    def push(self, value):
        """Adds node with given value to the end of the linked list."""
        new_node = Node(value)
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        return self

    def prepend(self, value):
        """Adds node with given value to the start of the linked list."""
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.length += 1
        return self

    def traverse_to_index(self, index):
        """Traverses to node at given index and returns the node found."""
        if index >= self.length:
            return None
        counter = 0
        current_node = self.head
        while counter != index:
            current_node = current_node.next
            counter += 1
        return current_node

    def insert(self, index, value):
        """Traverses to node at given index and inserts new node with value into list."""
        if index >= self.length:
            return self.push(value)
        new_node = Node(value)
        leader = self.traverse_to_index(index-1)
        pointer = leader.next
        leader.next = new_node
        new_node.next = pointer
        self.length += 1
        return self

    def print_list(self):
        """Print the list of values stored in linked list."""
        arr = []
        current_node = self.head
        while current_node != None:
            arr.append(current_node.value)
            current_node = current_node.next
        return arr

my_list = LinkedList("bird")
