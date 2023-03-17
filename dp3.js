// 프로그래머스 숫자변환하기 문제
function solution(x, y, n) {
	const max = y - x + 1;
	const dp = Array(y + 1).fill(max);
	dp[x] = 0;
	for (let i = x; i <= y + 1; i++) {
		if (i + n <= y) {
			dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
		}
		if (i * 2 <= y) {
			dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
		}
		if (i * 3 <= y) {
			dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
		}
	}
	console.log(dp);
	if (dp[y] === max) {
		return -1;
	}
	return dp[y];
}
