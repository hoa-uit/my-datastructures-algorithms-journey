/*
    Fast and Slow Pointers algorithm is also known as Hare and TorToise algorithm
    We use 2 pointers with different speed based on situation which loop through array or linkedList
    Usually used for finding cycled linkedList or array

*/


/*
    Problem statement: given a linkedList, find linkedList has cycle in it or not

    use 2 pointers with different speed, they should catch each other if linkedList is cycled

*/
class Node {
    constructor(value, node = null) {
        this.value = value;
        this.next = node;
    }
}

const initializeLinkedList = () => {
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = new Node(6);

    return head;
}

const hasCycled = (head) => {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;

        if (fastPointer == slowPointer) {
            return true;
        }
    }

    return false;
}

const noCycledLinkedList = initializeLinkedList();
let hasCycledLinkedList = initializeLinkedList();
hasCycledLinkedList.next.next.next.next.next = hasCycledLinkedList.next.next;
console.log('no cycle: ', hasCycled(noCycledLinkedList));
console.log('has cycle: ', hasCycled(hasCycledLinkedList));
