const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

const grid2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
];

const numberOfIsland = (grid: number[][]) => {
    if (grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;

    console.log("m ", m);
    console.log("n", n);
    let maxArea: number = 0;

    const DFS = (grid: number[][], i: number, j: number) => {
        // check if not satisfy the condition, return immediately
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return 0;
        }

        // if grid[i][j] === 1, set grid[i][j] = 0
        grid[i][j] = 0;
        let islandArea = 1;
        // islandArea = islandArea + 1;
        console.log("islandArea  recursive", islandArea);
        islandArea += DFS(grid, i - 1, j); // up
        islandArea += DFS(grid, i + 1, j);
        islandArea += DFS(grid, i, j - 1);
        islandArea += DFS(grid, i, j + 1);

        return islandArea;
    };

    let countIsland = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                countIsland++;
                maxArea = Math.max(DFS(grid, i, j), maxArea);
            }
        }
    }

    console.log("grid ", grid);
    console.log("countIsland ", countIsland);

    return maxArea;
};

console.log(numberOfIsland(grid2));
