function knapsack(weights, values, W) {
	const n = weights.length;
	const dp = new Array(n + 1).fill(null).map(() => new Array(W + 1).fill(0));

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= W; j++) {
			console.log(dp);
			if (weights[i - 1] <= j) {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
			} else {
				dp[i][j] = dp[i - 1][j];
			}
		}
	}

	return dp[n][W];
}
console.log(knapsack([3, 4, 1, 2], [10, 20, 30, 40], 5));
