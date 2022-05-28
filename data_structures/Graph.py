# === GRAPH ===

# Definition: A set of values that are related in a pairwise fashion. Each item is a node or vertex connected to other nodes via an edge (pointer).

# Big O:
    # Depends widely on graph implementation

# IMPLEMENTATION - Unweighted, undirected:

class Graph:
    def __init__(self):
        self.numberOfNodes = 0
        self.adjacentList = {}

    def addVertex(self, node):
        '''Adds a node to the graph.'''
        self.adjacentList[node] = []
        self.numberOfNodes += 1
        return self

    def addEdge(self, node1, node2):
        """Adds an edge to the graph, connecting two nodes."""
        self.adjacentList[node1].append(node2)
        self.adjacentList[node2].append(node1)
        return self

    def showConnections(self):
        """Prints all connections for each node to the console."""
        allNodes = self.adjacentList.keys()
        print("ALL CONNECTIONS:")
        for node in allNodes:
            print(node)
            nodeConnections = self.adjacentList[node]
            connections = " "
            for vertex in nodeConnections:
                connections += str(vertex) + " "
            print(str(node) + "-->" + connections)
        return "Done"

my_graph = Graph()
print(my_graph.addVertex(5))
print(my_graph.addVertex(10))
print(my_graph.addVertex(13))
print(my_graph.addEdge(5, 10))
print(my_graph.addEdge(5, 13))
print(my_graph.showConnections())
