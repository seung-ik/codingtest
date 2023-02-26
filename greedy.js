/* 회의실문제
[[s1,f1],[s2,f2],[s3,f3],[s4,f4]...] 회의실 하나에 회의가 배정될수 있는 최대값 문제 s1은 1번회의의 시작시간 f1은 1번회의의 끝나는시간, 회의시간 중복안됨
 */
function solution(list) {
	const arr = list.sort((a, b) => {
		if (a[1] - b[1] > 0) return 1;
		if (a[1] - b[1] < 0) return -1;
		return 0;
	});
	let result = [];
	let finish = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] > finish) {
			result.push(arr[i]);
			finish = arr[i][1];
		}
	}
	return [result.length, result];
}

const result = solution([
	[3, 5],
	[1, 4],
	[0, 6],
	[3, 9],
	[5, 7],
	[5, 9],
	[8, 11],
	[6, 10],
	[8, 12],
	[12, 16],
	[2, 14],
]); // 4개
console.log(result); // 회의마다 가격이 달라서 최적값을 구해야 하는경우에는 그리디하게 풀수 없음 냅색문제랑 같은개념이 됨
