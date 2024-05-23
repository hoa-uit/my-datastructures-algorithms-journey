/*
    Given a binary tree, populate an array to represent its level by level traversal. You should populate value of nodes on each 
    level, from left to right, in a separate sub-arrays

*/

class TreeNode {
    constructor(value, leftNode = null, rightNode = null) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

const initializeTree = () => {
    const root = new TreeNode(1);
    root.leftNode = new TreeNode(2);
    root.rightNode = new TreeNode(3);
    root.leftNode.leftNode = new TreeNode(4);
    root.leftNode.rightNode = new TreeNode(5);
    root.rightNode.rightNode = new TreeNode(6);

    root.leftNode.leftNode.leftNode = new TreeNode(7);

    return root;
};


const traverse = (root) => {
    let result = [];

    if (root == null) {
        return result;
    }

    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);

            if (node.leftNode !== null) queue.push(node.leftNode);
            if (node.rightNode !== null) queue.push(node.rightNode);
        }
        console.log(currentLevel);
        result.push(currentLevel);
    }
    return result;
};

//       1
//     /  \
//    2    3  
//   / \  /
//  4   5 6
// /
//7

// - create an array (queue) to store all nodes of each level
// - while loop until queue is empty
// - create a nested loop to iterate each node in level
// - dequeue to get the first node of queue
// - store value into array
// - after store value of node, should check if that node has leftNode or rightNode or not
// - if has leftNode then add to queue, the same with rightNode, this make sure we will not miss any node in tree
// - after we loop through all node of 1 level, we will have a queue contains all nodes of next level

const newTree = initializeTree();
traverse(newTree);
