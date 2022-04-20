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

    /**
     * Adds a node to the graph.
     * @param {*} node Value to be added as a node.
     * @returns Updated Graph.
     */
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this;
    }

    /**
     * Adds an edge to the graph, connecting two nodes.
     * @param {*} node1 First value to be connected with second.
     * @param {*} node2 Second value to be connected with first.
     * @returns Updated Graph.
     */
    addEdge(node1, node2) {
        // A directed graph only needs the top line of code
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this;
    }

    /**
     * Prints all connections for each node to the console.
     */
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        console.log("ALL CONNECTIONS:")
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
        return "Done";
    }
}

const myGraph = new Graph();
console.log(myGraph.addVertex(5));
console.log(myGraph.addVertex(10));
console.log(myGraph.addVertex(13));
console.log(myGraph.addEdge(5, 10));
console.log(myGraph.addEdge(5, 13));
console.log(myGraph.showConnections());
