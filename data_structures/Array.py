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

my_array = Array()
print(my_array.push("Brian"))
print(my_array.get(0))