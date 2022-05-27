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
        if index == 0:
            return self.prepend(value)
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

    def remove(self, index):
        """Removes a node at given index from the linked list."""
        if index >= self.length:
            return None
        leader = self.traverse_to_index(index-1)
        to_delete = leader.next
        leader.next = to_delete.next
        self.length -= 1
        return self.print_list()

    def reverse(self):
        if not self.head.next:
            return self.head
        first = self.head
        second = first.next
        self.tail = self.head
        while second:
            temp = second.next 
            second.next = first
            first = second
            second = temp
        self.head.next = None
        self.head = first
        return self.print_list()

my_list = LinkedList("bird")
print(my_list)
print(my_list.push("plane"))
print(my_list.prepend("front"))
print(my_list.print_list())
print(my_list.insert(1, "superman"))
print(my_list.insert(1, "delete me"))
print(my_list.print_list())
print(my_list.remove(1))
print(my_list.reverse())

# IMPLEMENTATION - Doubly Linked List:
class NodeTwo:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self, value):
        self.head = NodeTwo(value)
        self.tail = self.head
        self.length = 1

    def push(self, value):
        """Adds node with given value to the end of the linked list."""
        new_node = NodeTwo(value)
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        return self

    def prepend(self, value):
        """Adds node with given value to the start of the linked list."""
        new_node = Node(value)
        new_node.next = self.head
        self.head.prev = new_node
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
        if index == 0:
            return self.prepend(value)
        new_node = Node(value)
        leader = self.traverse_to_index(index-1)
        pointer = leader.next
        leader.next = new_node
        new_node.prev = leader
        new_node.next = pointer
        pointer.prev = new_node
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

    def remove(self, index):
        """Removes a node at given index from the linked list."""
        if index >= self.length:
            return None
        leader = self.traverse_to_index(index-1)
        to_delete = leader.next
        follower = to_delete.next
        leader.next = follower
        follower.prev = leader
        self.length -= 1
        return self.print_list()

my_list_two = DoublyLinkedList("bird")
print(my_list_two.push("plane"))
print(my_list_two.push("superman"))
print(my_list_two.prepend("what is that?"))
print(my_list_two.insert(1, "it is..."))
print(my_list_two.print_list())
print(my_list_two.remove(1))
print(my_list_two.remove(1))

