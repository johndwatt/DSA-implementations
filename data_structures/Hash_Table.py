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
    def __init__(self) -> None:
        self.data = []
    
    def _hash(self, key):
        """Returns a memory location for the given key."""
        hash = 0
        for i in range(len(key)):
            hash = (hash + key[i] * i) % len(self.data)
        return hash
    


