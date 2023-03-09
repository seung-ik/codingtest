// 나이트가 갈수있는 위치 그래프 만들고 재귀
// 나머지 방문 회로는 돌아오는거
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
const res = getGraph(3, 5);
console.log(res);
