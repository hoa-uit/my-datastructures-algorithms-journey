/*
You are given a string S of length N which encodes a non-negative number V in a binary form. Two types of operations may be performed on it to modify its value:

if V is odd, subtract 1 from it;
if V is even, divide it by 2.
These operations are performed until the value of V becomes 0.

For example, if string S = "011100", its value V initially is 28. The value of V would change as follows:

V = 28, which is even: divide by 2 to obtain 14;
V = 14, which is even: divide by 2 to obtain 7;
V = 7, which is odd: subtract 1 to obtain 6;
V = 6, which is even: divide by 2 to obtain 3;
V = 3, which is odd: subtract 1 to obtain 2;
V = 2, which is even: divide by 2 to obtain 1;
V = 1, which is odd: subtract 1 to obtain 0.
Seven operations were required to reduce the value of V to 0.

Write a function:

function solution(S: string): number;

that, given a string S consisting of N characters containing a binary representation of the initial value V, returns the number of operations after which its value will become 0.

Examples:

1. Given S = "011100", the function should return 7. String S represents the number 28, which becomes 0 after seven operations, as explained above.

2. Given S = "111", the function should return 5. String S encodes the number V = 7. Its value will change over the following five operations:

V = 7, which is odd: subtract 1 to obtain 6;
V = 6, which is even: divide by 2 to obtain 3;
V = 3, which is odd: subtract 1 to obtain 2;
V = 2, which is even: divide by 2 to obtain 1;
V = 1, which is odd: subtract 1 to obtain 0.
3. Given S = "1111010101111", the function should return 22.

4. Given string S consisting of "1" repeated 400,000 times, the function should return 799,999.

Write an efficient algorithm for the following assumptions:

string S is made only of the characters '0' and/or '1';
N, which is the length of string S, is an integer within the range [1..1,000,000];
the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit;
the binary representation may contain leading zeros.

*/
function solution(S: string): number {
  let decimalNum = parseInt(S, 2); // or we can use BigInt
  // let decimalNum = BigInt("0b" + S);
  let count = 0;

  while (decimalNum > 0) {
    count++;
    if (decimalNum % 2 === 0) {
      decimalNum = decimalNum / 2;
    } else {
      decimalNum = decimalNum - 1;
    }
  }

  return count;
}

// Example usage:
// console.log(solution("011100")); // Output: 7
// console.log(solution("111")); // Output: 5
// console.log(solution("1111010101111")); // Output: 22
// console.log(solution("1".repeat(400000))); // Output: 799999

// use a formula
// first we should remove leading zero number out of binary string, because doesn't matter how many leading zero number, the value still the same
// count total number 1 in binary string
// because each number 1 in string require 2 operations, subtract 1 and divide by 2
// except the last number 1, it only require 1 operation
// with left zero numbers, we have 1 operation for each one
// calculate the total

const solution2 = (S: string) => {
  const binaryArr = S.split("");
  while (binaryArr[0] === "0") {
    binaryArr.shift();
  }

  const oneNum = binaryArr.filter((value) => value === "1").length;

  if (oneNum === 0) {
    return 0;
  }

  const numberSize = binaryArr.length;
  const zeroNum = numberSize - oneNum;

  return zeroNum + (oneNum - 1) * 2 + 1;
};

// Example usage:
console.log(solution2("011100")); // Output: 7
console.log(solution2("111")); // Output: 5
console.log(solution2("1111010101111")); // Output: 22
console.log(solution2("1".repeat(400000))); // Output: 799999
console.log(solution2("0001")); // Output: 1

//
