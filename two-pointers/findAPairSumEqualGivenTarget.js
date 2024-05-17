/*
    Given an array of sorted numbers, find a pair has sum is equal to given target value

    solution:
    - Loop through array, and need a nested loop to iterate from i + 1 (index) to end => kind of brute force. O(N^2): Quadratic time complexity
    - Use two pointers, one starts from beginning (left pointer), one start at the end of index of array (right pointer), sum up
        - if sum < target value, move left pointer up to 1 index
        - if sum > target value, move right pointer down to 1 index
        - if sum == target value => return pair

    Input: [1, 2, 3, 4, 6], target=6
    Output: [1, 3]
    Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
*/
const findPairEqualGivenTarget = (array, target) => {
    const length = array.length;
    let leftPointer = 0;
    let rightPointer = length - 1;
    let sum = -1;
    while (leftPointer != rightPointer) {
        sum = array[leftPointer] + array[rightPointer];

        if (sum == target) {
            return [leftPointer, rightPointer];
        }

        if (sum < target) {
            leftPointer = leftPointer + 1;
        }

        if (sum > target) {
            rightPointer = rightPointer - 1;
        }
    }
}

const array = [1, 2, 3, 4, 6];
const target = 6;
const array2 = [2, 5, 9, 11];
const target2 = 11;
console.log(findPairEqualGivenTarget(array, target))
console.log(findPairEqualGivenTarget(array2, target2))
