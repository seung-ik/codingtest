// 나이트가 갈수있는 위치 그래프 만들고 재귀
// 나머지 방문 회로는 돌아오는거
// 그래프랑 백트래킹 조합하는 좋은 문제
function getGraph(n, m) {
	const x_move = [-2, -1, 1, 2, -2, -1, 2, 1];
	const y_move = [-1, -2, -2, -1, 1, 2, 1, 2];
	const graph = {};

	for (let i = 0; i < n * m; i++) {
		graph[i] = [];
	}

	for (let y = 0; y < n; y++) {
		for (let x = 0; x < m; x++) {
			for (let k = 0; k < 8; k++) {
				const next_x = x_move[k] + x;
				const next_y = y_move[k] + y;
				if (next_x >= 0 && next_x < m && next_y < n && next_y >= 0) {
					graph[y * m + x].push(next_y * m + next_x);
				}
			}
		}
	}

	return graph;
}

function solution(n, m) {
	const graph = getGraph(n, m);
	let count = 0;
	//k번째, v=현재노드, s=시작노드, 경로=graph, 지나온경로=mark
	const tour = (k, v, s, graph, mark) => {
		if (k === n * m && graph[v].includes(s)) {
			count++;
			mark[v] = k;
			console.log(mark);
		} else {
			for (const next of graph[v]) {
				// console.log(next);
				// console.log(mark[next]);
				if (!mark[next]) {
					mark[next] = k + 1;
					tour(k + 1, next, s, graph, mark);
					mark[next] = 0; // 백트레킹 기법
				}
			}
		}
	};

	tour(1, 0, 0, graph, []);

	return count;
}
const res = solution(3, 10);
console.log(res);
