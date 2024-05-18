/*
    Given a sorted array, return length of array after removing duplicated elements 
    ex:
    const array = [2, 3, 3, 3, 6, 9, 9]
    output = 4
    => [2, 3, 6, 9]

    approach:
    - two pointers: left pointer will will be the index of unique/non-duplicated element, and 
    right pointer to iterate all element from start to end array
    - sliding window can solve that too, with length of window is 2, will slide window and check if 2 pointer is equal, so we count up, 
    end looping, we return array.length - count => expectedResult

*/

const removeDuplicated1 = (array) => {
    let nextNonDuplicated = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[nextNonDuplicated - 1] != array[i]) {
            array[nextNonDuplicated] = array[i];
            ++nextNonDuplicated;
        }

    }

    return nextNonDuplicated;
}

const array = [2, 3, 3, 6, 9, 9];
// console.log(removeDuplicated1(array));
// console.log(array);


