# === ARRAY ===

# Definition: Ordered list of items stored sequentially in memory.

# Big O:
    # Lookup: O(1)
    # Push: O(1)
    # Insert: O(n)
    # Delete: O(n)
    # Search: O(n)

# IMPLEMENTATION:
class Hash_Table:
    def __init__(self, size):
        self.size = size
        self.data = [None]*self.size

    def __str__(self):
        """Prints the attributes of the class object in a dictionary format"""
        return str(self.__dict__)
    
    def _hash(self, key: str):
        """Returns a memory location for the given key."""
        hash = 0
        for i in range(len(key)):
            # ord(key[i]) gives the unicode code point of the character key[i]
            hash = (hash + ord(key[i]) * i) % len(self.data)
        return hash
    
    def set(self, key: str, value):
        """Adds a key value pair at the hashed address."""
        address = self._hash(key)
        if not self.data[address]:
            self.data[address] = []
        self.data[address].append([key, value])
        return self.data


my_map = Hash_Table(10)
print(my_map.set("1", "Brian"))
