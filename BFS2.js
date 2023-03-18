/*
-프로그래머스 lv2 무인도 여행문제
-BFS로 풀수있는 어려운 문제는 아닌데 for문 돌면서 체크하는 BFS 예시라 적어둠
-sort() 이렇게 해서 안되다가 sort((a,b)=>a-b);로 정렬해서 정답 sort() 의 경우 a,b 를 문자로 치환해서 정렬하니까 숫자 정렬하려면 저렇게 사용하면 안됨 까먹었었다.
-비슷한 문제로 프로그래머스 lv2 가 있는데 방문보다는 step 제한이 있는 형태의 문제여서 따로 적어두지는 않은 다만 조건 체크는 잘해줘야 하는 약간번거로울수 있는 문제였음
*/

function solution(maps) {
	const road = maps.map((el) => {
		return el.split("").map((el) => {
			if (el === "X") {
				return 0;
			} else {
				return Number(el);
			}
		});
	});

	const visited = maps.map((el) => {
		return el.split("").map((el) => -1);
	});
	const result = [];

	for (let row = 0; row < maps.length; row++) {
		for (let col = 0; col < maps[0].length; col++) {
			if (visited[row][col] < 0 && road[row][col] !== 0) {
				visited[row][col] = 1;
				let count = 0;
				const queue = [[row, col]];

				while (queue.length > 0) {
					const [r, c] = queue.shift();
					count += road[r][c];
					if (r + 1 < maps.length && visited[r + 1][c] < 0 && road[r + 1][c] !== 0) {
						queue.push([r + 1, c]);
						visited[r + 1][c] = 1;
					}
					if (r - 1 >= 0 && visited[r - 1][c] < 0 && road[r - 1][c] !== 0) {
						queue.push([r - 1, c]);
						visited[r - 1][c] = 1;
					}
					if (c + 1 < maps[0].length && visited[r][c + 1] < 0 && road[r][c + 1] !== 0) {
						queue.push([r, c + 1]);
						visited[r][c + 1] = 1;
					}
					if (c - 1 >= 0 && visited[r][c - 1] < 0 && road[r][c - 1] !== 0) {
						queue.push([r, c - 1]);
						visited[r][c - 1] = 1;
					}
				}
				result.push(count);
			}
		}
	}

	if (result.length === 0) return [-1];
	return result.sort((a, b) => a - b);
}
