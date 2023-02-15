/*
  coinchange 문제 : 코인리스트랑 amount 주어지면 최적으 조합 찾는 문제
  ex> [1,3,7] 형태의 코인 이 무한개씩 있다고 가정할때 1000원을 만드는데 최소 몇개가 필요한가 만들수 없다면 -1
  -문제의 구분
  1. 탐욕법이 가능한가? > 부분의 최적해가 전체 최적해의 부분집합인가 ? 동전끼리 상호 배수관계 인가를 기준으로 판단
  2. 그게아니면 동적계획법 > 재귀적 관계를 파악하고 중복되는 부분을 메모이제이션 해라
*/

// 탐욕법
function solve(coins, amount) {
	coins.sort((a, b) => b - a);
	if (amount == 0) {
		return 0;
	} else if (coins[0] > amount) {
		return solve(coins.slice(1), amount);
	} else {
		return solve(coins, amount - coins[0]) + 1;
	}
}
console.log(solve([1, 2, 3], 112));

function solve2(coins, amount) {
	coins.sort((a, b) => b - a);
	const max = amount + 1;
	const dp = Array(max).fill(max);
	dp[0] = 0;
	for (let W = 1; W < max; W++) {
		for (const coin of coins) {
			if (coin <= W) {
				dp[W] = Math.min(dp[W], dp[W - coin] + 1);
			}
		}
	}
	// console.log(dp);
	return dp[amount] < max ? dp[amount] : -1;
}
console.log(solve2([1, 2, 3], 112));
