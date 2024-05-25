/*
    given a binary tree, find all the path from root to leaf that sum node values is S (input integer number)

    use recursion to traverse all the nodes in tree in root to leaf way

    recurse until we reach leaf node, and sum is S, we count it. otherwise, we ignore
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
root.rightNode.rightNode = new TreeNode(6);
root.leftNode.leftNode.leftNode = new TreeNode(8);


const countPath = (node, sum, pathValues) => {
    if (node == null) {
        return;
    }

    pathValues.push(node.value);

    if (node.value == sum && node.leftNode == null && node.rightNode == null) {
        count++;
        paths.push([...pathValues]);
    }
    else {
        countPath(node.leftNode, sum - node.value, pathValues);
        countPath(node.rightNode, sum - node.value, pathValues);

    }

    pathValues.pop();
};


//       1
//     /  \
//    2    3  
//   / \  / \
//  4   5 6  6
// /
//8

let count = 0;
const paths = [];
const pathValues = [];

countPath(root, 10, pathValues);
console.log(count);
console.log(paths);