/*
Write a function that receives an array of strings that represent friend connections along 
with the names of two people and returns a number representing the degrees of separation 
between the two people. The connections will be represented by an array of strings with each 
string taking the format name: name for examples alice:bob. You can assume that the strings 
representing the connections will always be lower case a-z only. The names of the people to 
find the degrees of separation between will always be non-empty strings e.g. "alice" or "bob".
Your function will return the number of degrees of separation between the two people. If no 
connection can be made through friends or friends of friends etc then return -1.

Example 1
connections = ["fred:joe", "joe:mary", "mary:fred", "mary:bill'
namel = "fred"
name2 = "bill"
Result = 2

The expected result is 2 because fred is friends with mary, and mary is friends with bill. That is, bill is of distance 2 from fred.
        1      2
fred > mary > bill

*/

const degreesOfSeparation = (
  connections: string[],
  name1: string,
  name2: string
) => {
  if (connections.length === 0) {
    return;
  }

  // populate array into graph
  let graph = {};

  for (const connection of connections) {
    const [name1, name2] = connection.split(":");

    if (!graph[name1]) {
      graph[name1] = [name2];
    } else {
      graph[name1].push(name2);
    }

    if (!graph[name2]) {
      graph[name2] = [name1];
    } else {
      graph[name2].push(name1);
    }
  }

  console.log("graph: ", graph);
  console.log("name1: ", name1);
  console.log("name2: ", name2);

  // BFS to find the shortest path to name2

  const queue = graph[name1];
  const visited = new Set<string>();
  let degree = 1;
  while (queue.length > 0) {
    const currentQueue = queue;
    console.log("currentQueue: ", currentQueue);
    const currentQueueLength = currentQueue.length;

    for (let i = 0; i < currentQueueLength; i++) {
      const friend = currentQueue.shift()!;

      if (friend === name2) {
        return degree;
      }

      if (visited.has(friend)) {
        continue;
      }

      visited.add(friend);
      queue.push(...graph[friend]);
    }

    degree++;
  }

  return -1;
};

// populate data into graph

/*
fred: [joe, mary]
joe: [fred, mary]
mary: [fred, joe, bill]
bill: [mary]

*/
// Example usage:
const connections = ["fred:joe", "joe:mary", "mary:fred", "mary:bill"];
const name1 = "fred";
const name2 = "bill";
const result = degreesOfSeparation(connections, name1, name2);
console.log(`Degrees of separation between ${name1} and ${name2}: ${result}`);
