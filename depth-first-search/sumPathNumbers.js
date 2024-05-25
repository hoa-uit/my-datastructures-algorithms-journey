/*
    given a binary tree, each node in tree will be a digit in [0,9]
    each path represents a number
    sum all of that numbers

    //       1
    //     /  \
    //    2    3  
    //   / \  / \
    //  4   5 6  6
    // /
    //8

    eg: 1248 + 125 + 136 +136 = ...
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

const sumPathNumbers = (node, number) => {
    if (node == null) return;

    number = number + node.value;
    if (node.leftNode == null && node.rightNode == null) {
        console.log(Number(number));
        allNumbers = allNumbers + Number(number);
    }

    sumPathNumbers(node.leftNode, number);
    sumPathNumbers(node.rightNode, number);

    number.slice(0, -1);
};

let allNumbers = 0;

sumPathNumbers(root, '');

console.log('sum ne', allNumbers);