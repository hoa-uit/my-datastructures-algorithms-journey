/*
problem statement:
    given a binary tree, traverse binary tree with the first level is in order, the next level is reverse order, 
    the next of next level is in order, ...

    create array to populate value of nodes in each level with proper order

    //       1
    //     /  \
    //    2    3  
    //   / \  / \
    //  4   5 6  8
    // /
    //7

    ex:
    [1] // in order
    [3,2] // reversed
    [4,5,6,8] // in order
    [7] // reversed

    Solution:
    combining between traversal tree in BFS way with using flexible queue and stack
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

    const queue = [root];
    const stack = [];
    let isReversed = false;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node;

            if (isReversed) {
                node = queue.pop();
                currentLevel.push(node.value);
                if (node.rightNode !== null) queue.unshift(node.rightNode);
                if (node.leftNode !== null) queue.unshift(node.leftNode);
            }

            else {
                node = queue.shift();
                currentLevel.push(node.value);

                if (node.leftNode !== null) queue.push(node.leftNode);
                if (node.rightNode !== null) queue.push(node.rightNode);
            }

        }

        isReversed = !isReversed;

        console.log(currentLevel);

    }

};


const root = new TreeNode(1);
root.leftNode = new TreeNode(2);
root.rightNode = new TreeNode(3);
root.leftNode.leftNode = new TreeNode(4);
root.leftNode.rightNode = new TreeNode(5);
root.rightNode.leftNode = new TreeNode(6);
root.rightNode.rightNode = new TreeNode(8);
root.leftNode.leftNode.leftNode = new TreeNode(7);

//       1
//     /  \
//    2    3  
//   / \  / \
//  4   5 6  8
// /
//7

traverse(root);