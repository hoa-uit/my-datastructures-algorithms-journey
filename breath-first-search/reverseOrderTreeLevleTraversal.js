/*
    given a binary tree, populate value of nodes in each level to an array
    => each level has corresponding array stores value of nodes

    we use BFS in this case

    instead use queue, we use stack in this case

    stack store all nodes of each level

    create a loop to iterate untill stack is empty

    create a nested loop to iterate each node of stack

    store value to array

    add leftNode and rightNode to stack if exists

    note: should add rightNode before letNode, to make sure we add node in reversed order
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

    const stack = [root];
    while (stack.length > 0) {
        const currentLevel = [];
        const levelSize = stack.length;

        for (let i = 0; i < levelSize; i++) {
            const node = stack.pop();
            currentLevel.push(node.value);

            if (node.rightNode !== null) stack.unshift(node.rightNode);
            if (node.leftNode !== null) stack.unshift(node.leftNode);
        }

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