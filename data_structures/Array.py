# === ARRAY ===

# Definition: Ordered list of items stored sequentially in memory.

# Big O:
    # Lookup: O(1)
    # Push: O(1)
    # Insert: O(n)
    # Delete: O(n)
    # Search: O(n)

# IMPLEMENTATION:
from operator import itemgetter


class Array:
    def __init__(self):
        self.length = 0
        self.data = {}
    
    def get(self, idx: int):
        """Get value at array index."""
        return self.data[idx]

    def push(self, item):
        """Store a value in array at next available index at the end of the array."""
        self.data[self.length] = item
        self.length += 1
        return self.data

    def pop(self):
        """Deletes the last item in the array."""
        last_item = self.data[self.length - 1]
        del self.data[self.length - 1]
        self.length -= 1
        return last_item

    def delete_at_index(self, idx: int):
        """Delete item at index and shift items in array to new indicies."""
        item = self.data[idx]
        for i in range(idx, self.length - 1):
            self.data[i] = self.data[i + 1]
        del self.data[self.length - 1]
        self.length -= 1
        return item


my_array = Array()
print(my_array.push("Brian"))
print(my_array.get(0))
print(my_array.push("Sam"))
print(my_array.push("Michael"))
print(my_array.push("Danny"))
print(my_array.pop())
print(my_array.data)
print(my_array.push("DELETE ME"))
print(my_array.push("Danny"))
print(my_array.delete_at_index(3))
print(my_array.data, my_array.length)
