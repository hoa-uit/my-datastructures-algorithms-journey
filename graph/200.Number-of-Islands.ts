
const numIslands = (grid: string[][]) => {
    if (grid.length === 0) return 0;

    const m = grid.length; // vertical length
    const n = grid[0].length; // horizontal length
    let isLandCount = 0;

    const dfs = (grid: string[][], i: number, j: number): void => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
            return;
        }

        //mark grid[i][j] is visited
        grid[i][j] = '0';

        // perform DFS in all 4 directions
        dfs(grid, i - 1, j); //up
        dfs(grid, i + 1, j); //down
        dfs(grid, i, j - 1); //left
        dfs(grid, i, j + 1); //right
    }

    // iterate through each cell in the grid

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                isLandCount++;
                dfs(grid, i, j);
            }
        }
    }

    return isLandCount;
}

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

console.log(numIslands(grid1));
