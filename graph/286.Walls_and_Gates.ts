/*
286. Walls and Gates
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
  
After running your function, the 2D grid should be:

3  -1   0   1
2   2   1  -1
1  -1   2  -1
0  -1   3   4


*/




const INF = 2147483647;
const grid = [
  [0, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const findDistance = (grid: number[][]) => {
  if (grid.length === 0) return null;

  const n = grid.length;
  const m = grid[0].length;

  const DFS = (i: number, j: number, distance: number) => {
    if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] < distance) {
      return;
    }

    grid[i][j] = distance;
    DFS(i - 1, j, distance + 1);
    DFS(i + 1, j, distance + 1);
    DFS(i, j - 1, distance + 1);
    DFS(i, j + 1, distance + 1);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        DFS(i, j, 0);
      }
    }
  }
};

findDistance(grid);

console.log(grid);
