
/*

Problem Statement

You are given a list of gamers, where each gamer is identified by a unique integer ID. 
Additionally, you have a list of pairs of gamers who are considered "suitable" to be together. 
Your task is to divide the gamers into two groups such that no pair of suitable gamers end up 
in the same group.

Specifically, you need to determine if it's possible to partition the gamers into two arrays,
where each array does not contain any two suitable gamers.

Input:
An integer n representing the number of gamers.
A list of pairs suitablePairs, where each pair [a, b] indicates that gamer a and gamer b are suitable to be together.

Output
Return true if it is possible to divide the gamers into two groups such that no pair of suitable gamers are in the same group. 
Otherwise, return false.

Example 1:
Input:
n = 4
suitablePairs = [[1, 2], [1, 3], [2, 4], [3, 4]]

Output:
true

Explanation:
We can divide the gamers into two groups as follows:
Group 1: [1, 4]
Group 2: [2, 3]

No pair of suitable gamers are in the same group.

Example 2:

Input:
n = 3
suitablePairs = [[1, 2], [1, 3], [2, 3]]

Output:
false

Explanation:
There is no way to divide the gamers into two groups without having at least one pair of suitable gamers in the same group.


Constraints
1 ≤ 𝑛 ≤ 10^4
0 ≤ suitablePairs.length ≤ 10^4
1 ≤ suitablePairs[i][0],suitablePairs[i][1] ≤ n
Each pair [a, b] is unique.


*/
// ex1:
const n = 4;
const suitablePairs = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
];

// Example 2:

const n2 = 3;
const suitablePairs2 = [
  [1, 2],
  [1, 3],
  [2, 3],
];

const solution = (suitablePairs: number[][], n: number) => {
  const gamerRelationshipMatrix = {};
  for (let i = 0; i < suitablePairs.length; i++) {
    const [gamer1, gamer2] = suitablePairs[i];
    if (!gamerRelationshipMatrix[gamer1]) {
      gamerRelationshipMatrix[gamer1] = new Set([gamer2]);
    } else {
      gamerRelationshipMatrix[gamer1].add(gamer2);
    }

    if (!gamerRelationshipMatrix[gamer2]) {
      gamerRelationshipMatrix[gamer2] = new Set([gamer1]);
    } else {
      gamerRelationshipMatrix[gamer2].add(gamer1);
    }
  }

  const Gamers = Array.from({ length: n }, (_, index) => index + 1);

  const result: number[][] = [];
  const visited = new Set();
  for (let i = 1; i <= n; i++) {
    const gamerRelationship = gamerRelationshipMatrix[i];
    if (visited.has(i)) continue;

    for (let j = 0; j < n; j++) {
      if (
        !gamerRelationship.has(Gamers[j]) &&
        i !== Gamers[j] &&
        !visited.has[Gamers[j]]
      ) {
        result.push([i, Gamers[j]]);
        visited.add(i);
        visited.add(Gamers[j]);

        break;
      }
    }
  }
  console.log(gamerRelationshipMatrix);
  console.log(visited);

  return result.length > 0;
};

console.log(solution(suitablePairs, n));
console.log(solution(suitablePairs2, n2));
