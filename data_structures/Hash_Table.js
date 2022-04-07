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
        // hash the key to find an address
        let address = this._hash(key);
        // if the address doesn't exist, add the address
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // set the address to the key value pair
        this.data[address].push([key, value]);
        // return updated data
        return this.data;
    }

    /**
     * Returns value stored at address with matching key.
     * @param {*} key Table key.
     * @returns Value stored at table key. 
     */
    get(key) {
        // find key's hashed address location
        const address = this._hash(key);
        // store that data location in variable
        const currentBucket = this.data[address];
        // if that location has data...
        if (currentBucket){
            // loop through the data...
            for (let i = 0; i < currentBucket.length; i++) {
                // if location data has matching key, return the paired value
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        // otherwise, return undefined
        return undefined;
    }
}


// TESTING:
let map = new HashTable(10);
console.log(map);
console.log(map.set("bird", 1));
console.log(map.set("potter", "harry"));
console.log(map.get("bird"));