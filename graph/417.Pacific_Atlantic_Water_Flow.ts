/*
  we should define 2 different grids
  pacific:  a matrix m*n that mark a cell can reach to pacific or not (true/false)
  atlantic: a matrix m*n that mark a cell can reach to atlantic or not (true/false)

  we should define 2 queue to store the index of cell
  pacificQueue: a 2D array to store list indexes of cells can reach to pacific ocean
  atlanticQueue: a 2D array to store list indexes of cells can reach to atlantic ocean

  perform BFS to mark all cells in heights can reach to pacific ocean, represented in pacific matrix
  perform BFS to mark all cells in heights can reach to atlantic ocean, represented in atlantic matrix

  loop all cells in heights, check if from that cell, can reach to pacific ocean and atlantic ocean or not
  if yes, push index to result array

  return result array

*/


const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

const pacificAtlantic = (heights: number[][]) => {
  const m = heights.length;
  const n = heights[0].length;

  const pacific: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false)
  );

  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  console.log("pacific", pacific);
  console.log("atlantic", atlantic);

  // initialize queues for both oceans
  const pacificQueue: number[][] = [];
  const atlanticQueue: number[][] = [];

  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    pacific[i][0] = true;
    atlanticQueue.push([i, n - 1]);
    atlantic[i][n - 1] = true;
  }

  for (let i = 0; i < n; i++) {
    pacificQueue.push([0, i]);
    pacific[0][i] = true;
    atlanticQueue.push([n - 1, i]);
    atlantic[n - 1][i] = true;
  }

  console.log("pacific", pacific);
  console.log("atlantic", atlantic);

  console.log("pacificQueue", pacificQueue);
  console.log("atlanticQueue", atlanticQueue);

  const BFS = (queue: number[][], visited: boolean[][]) => {
    while (queue.length > 0) {
      const currentCell = queue.shift()!;
      console.log("currentCell ", currentCell);
      const [row, col] = currentCell;

      if (row - 1 >= 0 && !visited[row - 1][col]) {
        if (heights[row - 1][col] >= heights[row][col]) {
          visited[row - 1][col] = true;
          queue.push([row - 1, col]);
        }
      }

      if (row + 1 < m && !visited[row + 1][col]) {
        if (heights[row + 1][col] >= heights[row][col]) {
          visited[row + 1][col] = true;

          queue.push([row + 1, col]);
        }
      }

      if (col - 1 >= 0 && !visited[row][col - 1]) {
        if (heights[row][col - 1] >= heights[row][col]) {
          visited[row][col - 1] = true;

          queue.push([row, col - 1]);
        }
      }

      if (col + 1 < n && !visited[row][col + 1]) {
        if (heights[row][col + 1] >= heights[row][col]) {
          visited[row][col + 1] = true;

          queue.push([row, col + 1]);
        }
      }
    }
  };

  BFS(pacificQueue, pacific);
  BFS(atlanticQueue, atlantic);

  const result: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

console.log(pacificAtlantic(heights));
