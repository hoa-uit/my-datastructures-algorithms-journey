/*
Given an array, find the average of all continuous sub arrays with size K in it
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

1. For first 5 numbers of array, we have average is (1+3+2+6-1)/5 = 11/5 = 2.2
2. For next sub array(index from 1->5): 2.8
...

solution:
- With brute force, we spend O(n2): denotes quadratic time complexity to do that
- With sliding window, we only need O(n): denotes linear time to solve that
*/

const averageContinuousSubArrayOfSizeK1 = (array, K) => {
    const length = array.length;
    let result = [];
    let sum = 0;

    for (let i = 0; i < K; i++) {
        sum += array[i];
    };

    result.push(sum / 5.0);

    for (let i = K; i < length; i++) {
        sum -= array[i - K];
        sum += array[i];
        result.push(sum / 5.0);
    }

    return result;
}


const averageContinuousSubArrayOfSizeK2 = (array, K) => {
    let result = [];

    for (let i = 0; i <= array.length - K; i++) {
        sum = 0;
        for (let j = i; j < i + K; j++) {
            sum += array[j];
        }
        result.push(sum / K);
    }

    return result;
}


const Array = [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5;
console.log(averageContinuousSubArrayOfSizeK1(Array, K));
console.log(averageContinuousSubArrayOfSizeK2(Array, K));