/*
    implement graph, basic operation: add, remove vertex, add adjacency list
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex, adjacentVertex) {
        if (!this.adjacencyList[vertex]) {
            this.addVertex(vertex);
        }

        if (!this.adjacencyList[adjacentVertex]) {
            this.addVertex(adjacentVertex);
        }

        this.adjacencyList[vertex].push(adjacentVertex);
        this.adjacencyList[adjacentVertex].push(vertex);
    }

    removeEdge(vertex, adjacentVertex) {
        this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(vertex => vertex !== adjacentVertex);
        this.adjacencyList[adjacentVertex] = this.adjacencyList[adjacentVertex].filter(adjacentVertex => adjacentVertex !== vertex);
    }

    removeVertex(vertex) {

        while (!this.adjacencyList[vertex]) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);

            if (this.adjacencyList[vertex].length === 0) {
                delete this.adjacencyList[vertex];
            }
        }
    }
}

Graph.prototype.bfs = function (start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);

    let currentNode;
    while (queue.length !== 0) {
        currentNode = queue.shift();
        const adjacencyList = this.adjacencyList[currentNode];
        console.log('current node: ', currentNode);
        console.log('adjacentList: ', adjacencyList);
        console.log('visted node: ', visited);
        for (const vertex of adjacencyList) {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                queue.push(vertex);
            }

        }
    }
};

const graph = new Graph();

// Add edges to the graph
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 4);

console.log('traversing graph form node 0');

graph.bfs(0);