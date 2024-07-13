class _Node {
    val: number;
    neighbors: _Node[] | null;

    constructor(val: number, neighbors: _Node[] | null = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

const cloneGraph = (givenNode: _Node) => {

    if (givenNode === null) return null;

    const nodeMap = new Map<_Node, _Node>();

    const clone = (node: _Node) => {
        if (nodeMap.has(node)) {
            return nodeMap.get(node);
        }

        const clonedNode = new _Node(node.val);
        nodeMap.set(node, clonedNode);

        for (const neighbor of node.neighbors || []) {
            const newNeighbor = clone(neighbor) as _Node;
            clonedNode.neighbors?.push(newNeighbor);
        }

        return clonedNode;
    }


    return clone(givenNode);
}
