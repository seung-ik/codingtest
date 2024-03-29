// https://www.youtube.com/watch?v=cWNEl4HE2OE
// the data
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
	["PHX", "LAX"],
	["PHX", "JFK"],
	["JFK", "OKC"],
	["JFK", "HEL"],
	["JFK", "LOS"],
	["MEX", "LAX"],
	["MEX", "BKK"],
	["MEX", "LIM"],
	["MEX", "EZE"],
	["LIM", "BKK"],
];

// The graph
const adjacencyList = new Map();

function addNode(airport) {
	adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

//Create the graph
airports.forEach(addNode);
console.log(adjacencyList, "?");
routes.forEach((route) => addEdge(...route));
console.log(adjacencyList, "?");

//BFS
function bfs(start) {
	const visited = new Set();
	const queue = [start];
	while (queue.length > 0) {
		const airport = queue.shift();
		const destinations = adjacencyList.get(airport);

		for (const destination of destinations) {
			if (destination === "BKK") {
				console.log("found it");
			}

			if (!visited.has(destination)) {
				visited.add(destination);
				queue.push(destination);
				console.log(destination);
			}
		}
	}
}
bfs("PHX"); // found or not found

function dfs(start, visited = new Set(), step) {
	visited.add(start);
	const destinations = adjacencyList.get(start);

	for (const destination of destinations) {
		if (destination === "BKK") {
			console.log(`DFS found BKK ${step}in steps`);
			return;
		}
		if (!visited.has(destination)) {
			dfs(destination, visited, step + 1);
		}
	}
}
const a = new Set();
dfs("PHX", a, 1);
