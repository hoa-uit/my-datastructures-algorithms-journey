/*
    given a binary tree, get all nodes in the right view of a binary tree

    //       1
    //     /  \
    //    2    3  
    //   / \  / \
    //  4   5 6  8
    // /
    //7

    eg: 
    [1,3,8]

*/

class TreeNode {
    constructor(value, leftNode = null, rightNode = null) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

const traverse = (root) => {
    if (root == null) return [];
    const rightViewNodes = [];

    let queue = [root];
    let height = 0;
    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (i == levelSize - 1 && levelSize == 2 ** height) {
                rightViewNodes.push(node.value);
            }
            if (node.leftNode !== null) queue.push(node.leftNode);
            if (node.rightNode !== null) queue.push(node.rightNode);
        }
        height++;
    }

    return rightViewNodes;
};



const root = new TreeNode(1);
root.leftNode = new TreeNode(2);
root.rightNode = new TreeNode(3);
root.leftNode.leftNode = new TreeNode(4);
root.leftNode.rightNode = new TreeNode(5);
root.rightNode.leftNode = new TreeNode(6);
root.rightNode.rightNode = new TreeNode(8);
root.leftNode.leftNode.leftNode = new TreeNode(7);

console.log(traverse(root));