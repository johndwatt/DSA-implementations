// === GRAPH ===

// Definition: A set of values that are related in a pairwise fashion. Each item is a node or vertex connected to other nodes via an edge (pointer).

// Big O:
    // Depends widely on graph implementation

// IMPLEMENTATION - Unweighted, undirected:
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
}