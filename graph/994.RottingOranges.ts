const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

const grid2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];

const rottingOranges = (grid: number[][]) => {
  if (grid.length === 0) return null;

  const n = grid.length;
  const m = grid[0].length;
  const queue: [number, number][] = [];
  let freshOranges = 0;
  let minutes = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  if (queue.length === 0) {
    return -1;
  }

  //BFS
  while (queue.length > 0 && freshOranges > 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const [r, c] = queue.shift()!;

      if (r - 1 >= 0 && r - 1 < n && grid[r - 1][c] === 1) {
        freshOranges--;
        grid[r - 1][c] = 2;
        queue.push([r - 1, c]);
      }

      if (r + 1 >= 0 && r + 1 < n && grid[r + 1][c] === 1) {
        freshOranges--;
        grid[r + 1][c] = 2;
        queue.push([r + 1, c]);
      }

      if (c - 1 >= 0 && c - 1 < m && grid[r][c - 1] === 1) {
        freshOranges--;
        grid[r][c - 1] = 2;
        queue.push([r, c - 1]);
      }

      if (c + 1 >= 0 && c + 1 < n && grid[r][c + 1] === 1) {
        freshOranges--;
        grid[r][c + 1] = 2;
        queue.push([r, c + 1]);
      }
    }

    minutes++;
  }

  return minutes;
};

console.log(rottingOranges(grid2));
