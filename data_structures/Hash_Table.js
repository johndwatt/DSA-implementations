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

    /**
     * Looks up and retrieves all keys in the hash table.
     * @returns {Array} Array containing all keys in hash table.
     */
    keys() {
        // if there is no data, return undefined
        if (!this.data.length) return undefined;
        // instantiate keys array
        const keysArray = [];
        // loop through data and push all keys to array
        for (let i = 0; i < this.data.length; i++){
            // check if data exists
            if (this.data[i]) {
                // if there is more than one item, loop through and push all keys to array
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++){
                        keysArray.push(this.data[i][j][0]);
                    }
                // if only one item, push key to array
                } else {
                    keysArray.push(this.data[i][0][0]);
                }
            }
        }
        // return array
        return keysArray;
    }

    /**
     * Deletes data stored at address with matching key.
     * @param {*} key Table key.
     * @returns Boolean value: true on success, false on failure/could not find.
     */
    remove(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    currentBucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
}


// TESTING:
let map = new HashTable(5);
console.log(map);
console.log("map.set('bird', 1)):", map.set("bird", 1));
console.log("map.set('potter', 'harry')):", map.set("potter", "harry"));
console.log("map.set('man', 'jim')):", map.set("man", "jim"));
console.log("map.set('mano', 'jims')):", map.set("mano", "jims"));
console.log("map.get('bird'):", map.get("bird"));
console.log("map.keys():", map.keys());
console.log("map.remove(bird):", map.remove("bird"));
console.log("map.remove(mano):", map.remove("mano"));
console.log("map.data:", map.data);
console.log("map.remove(hedge):", map.remove("hedge"));