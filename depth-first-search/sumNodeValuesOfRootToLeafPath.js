/*
    given a binary tree, and a number S
    find a path from root to leaf with sum value of all that nodes is equal to S

    return true if has that path otherwise return false
*/

class TreeNode {
    constructor(value, leftNode = null, rightNode = null) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

const root = new TreeNode(1);
root.leftNode = new TreeNode(2);
root.rightNode = new TreeNode(3);
root.leftNode.leftNode = new TreeNode(4);
root.leftNode.rightNode = new TreeNode(5);
root.rightNode.leftNode = new TreeNode(6);
root.rightNode.rightNode = new TreeNode(7);
root.leftNode.leftNode.leftNode = new TreeNode(8);

const hasPath = (node, sum) => {
    if (node == null) return false;

    if (node.value == sum && node.leftNode == null && node.rightNode == null) return true;

    return hasPath(node.leftNode, sum - node.value) || hasPath(node.rightNode, sum - node.value);
};

//       1
//     /  \
//    2    3  
//   / \  / \
//  4   5 6  7
// /
//8

console.log(hasPath(root, 10));