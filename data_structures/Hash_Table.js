// === HASH TABLE ===

// Definition: A table that maps keys to values and stores them in a memory location determined by a hash function. 

// Big O:
    // Space complexity: O(n)
    // Insert: O(1)
    // Lookup: O(1)
    // Delete: O(1)
    // Search: O(1)

// IMPLEMENTATION:

class HashTable {
    // instantiate hash table
    constructor(size){
        this.data = new Array(size);
    }

    /**
     * Returns a memory location for the given key. 
     * @param {*} key Table key.
     * @returns {Number} Number for hash table memory location. 
     */
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    /**
     * Adds a key value pair to the hash table at the hashed address. 
     * @param {*} key Table key.
     * @param {*} value Value paired with key. 
     * @returns Hash table data with added key value pair.
     */
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
}

let map = new HashTable(10);
console.log(map);
map.set("bird", 1);