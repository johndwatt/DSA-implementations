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
    
    def add(self, key: str, value):
        """Adds a key value pair at the hashed address."""
        address = self._hash(key)
        if not self.data[address]:
            self.data[address] = []
        self.data[address].append([key, value])
        return self.data
    
    def get(self, key: str):
        """Returns value stored at address with matching key."""
        address = self._hash(key)
        current_bucket = self.data[address]
        if current_bucket:
            for i in range(len(current_bucket)):
                if current_bucket[i][0] == key:
                    return current_bucket[i][1]
        return None

    def keys(self):
        """Returns a list of all keys in the hash table."""
        if not len(self.data): return None
        keys_list = []
        for i in range(len(self.data)):
            if self.data[i]:
                if len(self.data[i]) > 1:
                    for j in range(len(self.data[i])):
                        keys_list.append(self.data[i][j][0])
                else:
                    keys_list.append(self.data[i][0][0])
        return keys_list

    def remove(self, key: str):
        """Deletes data stored at address with matching key."""
        address = self._hash(key)
        current_bucket = self.data[address]
        if current_bucket:
            for i in range(len(current_bucket)):
                if current_bucket[i][0] == key:
                    del current_bucket[i]
                    return True
        return False


my_map = Hash_Table(10)
print(my_map.add("1", "Brian"))
print(my_map.add("5", "Sam"))
print(my_map.add("3", "Michael"))
print(my_map.add("10", "Danny"))
print(my_map.get("10"))
print(my_map.keys())
print(my_map.remove("10"))
print(my_map.keys())
