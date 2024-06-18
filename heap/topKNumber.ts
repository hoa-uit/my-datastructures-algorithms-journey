/*
    given an unsorted array, find k largest number in it

    ex:
    Input: [3, 1, 5, 12, 2, 11], K = 3
    Output: [5, 12, 11]

    we can use brute force:
    - sort the array, pick k largest elements
    - but it takes NLog(n) time complexity

    other approach:
    - 
*/

class Heap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private heapSize() {
    return this.heap.length;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private getLeftChild(index: number): number {
    return this.heap[this.getLeftChildIndex(index)];
  }

  private getRightChild(index: number): number {
    return this.heap[this.getRightChildIndex(index)];
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heapSize();
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChild(index) < this.heapSize();
  }

  private getParent(childIndex: number): number {
    return this.heap[this.getParentIndex(childIndex)];
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) <= 0;
  }

  private swap(index1: number, index2: number): void {
    const tempValue = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tempValue;
  }

  private heapifyUp(): void {
    let index = this.heapSize() - 1;

    while (index >= 0) {
      if (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
        this.swap(index, this.getParentIndex(index));
      }

      index = this.getParentIndex(index);
    }
  }

  private heapifyDown(): void {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.getRightChild(index) < this.getLeftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  public add(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  public remove() {
    if (this.heapSize() === 0) {
      return null;
    }

    const lastValue = this.heap[0];
    this.heap[0] = this.heap[this.heapSize() - 1];
    this.heap.pop();
    this.heapifyDown();

    return lastValue;
  }

  public printHeap(): void {
    for (const node of this.heap) {
      console.log(" ", node);
    }
  }

  public peek() {
    return this.heap[0];
  }
}

const findKLargestElement = () => {
  const heap = new Heap();
  heap.add(10);
  heap.add(15);
  heap.add(30);
  heap.add(40);
  heap.add(50);
  heap.add(100);
  heap.add(40);

  console.log(heap);
  //   heap.printHeap();
  console.log(heap.remove());

  console.log(heap);
};

findKLargestElement();
