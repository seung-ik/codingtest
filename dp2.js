// 카탈란 수열 1 1 2 5 14 ...
// c3 = c2c0 + c1c1 + c0c2

// 재귀식 발견 > 재귀중 중복발견 > 메모이제이션 + 재귀 top-down > 재귀식을 bottom-up으로 포문으로 구현 : dp

function catalan1(n) {
	if (n === 0) {
		return 1;
	}
	let C = 0;
	for (let i = 0; i <= n - 1; i++) {
		C += catalan1(i) * catalan1(n - 1 - i);
	}
	return C;
}
console.time("catalan1");
for (let i = 1; i < 18; i++) {
	console.log(i, catalan1(i), 2);
}
console.timeEnd("catalan1");

function catalan2(n) {
	const memo = Array(n + 1).fill(0);
	const recurse = (num) => {
		if (num === 0) {
			memo[num] = 1;
		} else {
			if (memo[num] === 0) {
				for (let i = 0; i <= n - 1; i++) {
					memo[num] += catalan2(i) * catalan2(n - i - 1);
				}
			}
		}
		return memo[num];
	};

	return recurse(n);
}
console.time("catalan2");
for (let i = 1; i < 18; i++) {
	console.log(i, catalan2(i), 2);
}
console.timeEnd("catalan2");

function catalan3(n) {
	const C = Array(n + 1).fill(0);
	C[0] = 1;
	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			C[i] += C[j] * C[i - j - 1];
		}
	}
	return C[n];
}

console.time("catalan3");
for (let i = 1; i < 18; i++) {
	console.log(i, catalan3(i), 2);
}
console.timeEnd("catalan3");
