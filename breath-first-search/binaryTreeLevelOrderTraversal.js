/*
    Given a binary tree, populate an array to represent its level by level traversal. You should populate value of nodes on each 
    level, from left to right, in a separate sub-arrays

*/

class TreeNode {
    constructor(value, leftNode = null, rightNode = null) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode
    }
}

const initializeTree = () => {
    const root = new TreeNode(1);
    root.leftNode = new TreeNode(2);
    root.rightNode = new TreeNode(3);
    root.leftNode.leftNode = new TreeNode(4);
    root.leftNode.rightNode = new TreeNode(5);
    root.rightNode.rightNode = new TreeNode(6);

    return root;
}

const traverse = (root) => {
    let result = [];

    return result;
}