// const replaceAt = (s: string, index: number, value: string): string => {
//   return s.substring(0, index) + value + s.substring(index + 1);
// };

// const swapString = (s: string, pair: number[]): string => {
//   const charAt1stIndex = s.charAt(pair[0]);
//   const charAt2ndIndex = s.charAt(pair[1]);

//   let swappedString = replaceAt(s, pair[0], charAt2ndIndex);

//   return replaceAt(swappedString, pair[1], charAt1stIndex);
// };

// const smallestStringWithSwaps = (s: string, pairs: number[][]): string => {
//   let string = s;
//   for (let i = 0; i < pairs.length; i++) {
//     console.log(swapString(string, pairs[i]));
//     string = swapString(string, pairs[i]);
//   }
//   return "end";
// };

// console.log(
//   smallestStringWithSwaps("dcab", [
//     [0, 3],
//     [1, 2],
//     [0, 2],
//   ]),
// );

const smallestStringWithSwaps = (s: string, pairs: number[][]): string => {
  const n = s.length;
  const graph = new Map<number, number[]>();

  // build graph
  for (const [a, b] of pairs) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a)!.push(b);
    graph.get(b)!.push(a);
  }

  console.log("graph: ", graph);

  // find all connected components using DFS
  const visited = new Array(n).fill(false);
  const components: number[][] = [];

  const dfs = (node: number, component: number[]) => {
    visited[node] = true;
    component.push(node);

    for (const neighbor of graph.get(node) || []) {
      if (!visited[neighbor]) {
        dfs(neighbor, component);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const component: number[] = [];
      dfs(i, component);
      components.push(component);
    }
  }

  // sort characters in each component and replace them back
  const charArray = s.split("");

  for (const component of components) {
    const chars = component.map((index) => charArray[index]);
    chars.sort();
    component.sort((a,b) => a-b);

    for(let i = 0; i < component.length; i++) {
        charArray[component[i]] = chars[i];
    }
  }

  return charArray.join("");
};


console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]]))