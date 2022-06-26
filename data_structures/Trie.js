// === TRIE ===

// Definition: Specialized tree usually used for searching with text (can find if a word or part of a word exists in a text).
    // Also called a prefix tree. 

// Big O:
    // Lookup: O(n)
    // Insert: O(n)
    // Delete: O(n)
    // Search: O(n)

// Good space complexity because you do not need to store every word separately.

// IMPLEMENTATION:
class Node {
    constructor(value) {
        this.value = value; // Not necessary?
        this.endOfWord = false;
        this.parent;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(word) { // O(n)
        if (word === undefined || word === null) return null;

        let current = this.root;
        // iterate through given word starting from root
        for (let i = 0; i < word.length; i++) {
            // if character doesnt exist, add it and point to parent node
            if (current.children[word[i]] === undefined) {
                current.children[word[i]] = new Node(word[i]);
                current.children[word[i]].parent = current;
            }
            // move on to add next char
            current = current.children[word[i]];
        }
        // set last char to the end of added word
        current.isEndOfWord = true;
        return this;
    }

    search(word) { // O(n)
        if (word === undefined || word === null) return null;

        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            // if character isn't found, return false
            if (current.children[word[i]] === undefined) {
                return false;
            }
            // move on to search next char
            current = current.children[word[i]];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) { // O(n)
        if (prefix === undefined || prefix === null) return null;

        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            // if character isn't found, return false
            if (current.children[prefix[i]] === undefined) {
                return false;
            }
            // move on to search next char
            current = current.children[prefix[i]];
        }
        return true;
        
    }

    remove(word) { // O(2n) --> O(n) 
        if (word === undefined || word === null) return null;

        // Find end of word to remove - if it exists
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            if (current.children[word[i]] === undefined) {
                return null;
            }
            current = current.children[word[i]];
        }
        
        // If not end of word, return false - it is not a word and can't be removed
        if (current.isEndOfWord === false) return null;
        // If this node has children (it is part of another word), set EoW to false (will no longer be recognized as word)
        if (Object.keys(current.children).length !== 0) {
            current.isEndOfWord = false;
            return word;
        }

        // Tracks index of word to be removed from the end of the word
        let idx = word.length - 1;
        do {
            // Remove current node from parent node's children
            delete current.parent.children[word[idx]];
            // Decrement tarcking index after deletion
            idx--;
            // Set current node to parent, and repeat
            current = current.parent;
        } while (
            // if Leaf node
            Object.keys(current.children).length === 0 &&
            // if not end of word
            current.isEndOfWord === false &&
            // if not the root
            current !== this.root
        );

        return word;
    }

}

const myTrie = new Trie();
console.log(myTrie);
console.log(myTrie.insert("bog"));
console.log(myTrie.insert("boy"));
console.log(myTrie.insert("dash"));
console.log(myTrie.insert("rat"));
console.log(myTrie.insert("roof"));
console.log(myTrie.search("dog")); // false
console.log(myTrie.search("bog")); // true
console.log(myTrie.startsWith("bo")); // true
console.log(myTrie.startsWith("do")); // false
console.log(myTrie.search("boy")); // true
console.log(myTrie.remove("boy"));
console.log(myTrie.search("boy")); // false
console.log(myTrie.search("bog")); // true