/* 
프로그래머스 배달문제. 그래프 > 다익스트라 좋은예시
일반 bfs에서 처럼 visit 체크를 하게되면 다른경로로 우회하는게 cost 가 낮은 경우가 있어서 안되고 그런다고 visit 체크를 안하면 효율성에서 문제가 생겼다. 근데 다익스트라 알고리즘 자체는 어렵지 않았는데 코드로 어떻게 그런패턴으로 진행해야할지 어렵게 느껴지는 부분이였다. 일반큐가 아닌 while문 안에서 우선순위 큐를 사용하면(탐욕법) visit 체크를 하면서도 가장 최단거리(코스트)를 찾을수 있는 방법이였다. 
*/
function solution(N, road, K) {
	const graph = buildGraph(N, road); // 인접 리스트 그래프 생성
	const distances = dijkstra(graph, 1); // 1번 마을에서 각 마을까지의 최단 거리 계산
	let count = 0;
	for (let i = 1; i <= N; i++) {
		if (distances[i] <= K) count++;
	}
	return count;
}

// 인접 리스트 그래프 생성 함수
function buildGraph(N, road) {
	const graph = Array.from({ length: N + 1 }, () => []);
	for (let [start, end, distance] of road) {
		graph[start].push([end, distance]);
		graph[end].push([start, distance]);
	}
	return graph;
}

// 다익스트라 알고리즘 함수
function dijkstra(graph, start) {
	const N = graph.length - 1;
	const distances = Array.from({ length: N + 1 }, () => Infinity);
	const visited = Array.from({ length: N + 1 }, () => false);
	distances[start] = 0;
	const queue = [[start, 0]];
	while (queue.length) {
		queue.sort((a, b) => a[1] - b[1]); // 우선순위 큐 구현
		const [current, currentDistance] = queue.shift();
		if (visited[current]) continue;
		visited[current] = true;
		for (let [next, distance] of graph[current]) {
			if (distances[next] > currentDistance + distance) {
				distances[next] = currentDistance + distance;
				queue.push([next, distances[next]]);
			}
		}
	}
	return distances;
}
