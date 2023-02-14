// 숫자만큰 뛰는 개구리는 순환가능한가?
// bruth-force
const solve = (n) => {
	const result = [];
	for (let i = 2; i <= n; i++) {
		const perms = getPermutation(getArr(i), i - 1);
		for (const perm of perms) {
			const arr = [1].concat(perm);
			if (isValid([...arr])) {
				result.push(arr);
			}
		}
	}
	console.log("length: ", result.length);
	return result;
};

function isValid(arr) {
	let pos = 0;
	while (arr[pos] > 0) {
		nextPos = (pos + arr[pos]) % arr.length;
		arr[pos] = 0;
		pos = nextPos;
	}
	const sum = arr.reduce((acc, cur) => acc + cur, 0);
	return sum === 0;
}

function getArr(n) {
	return Array(n - 1)
		.fill(2)
		.map((el, i) => el + i);
}

function getPermutation(arr, num) {
	const result = [];
	if (arr.length === 1) {
		return arr.map((el) => [el]);
	}
	for (let i = 0; i < arr.length; i++) {
		const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
		const perms = getPermutation(rest, num - 1);
		const attached = perms.map((el) => [arr[i], ...el]);
		result.push(...attached);
	}
	return result;
}

const result = solve(8);
console.log(result);

//백트레킹
//방문 처리를 객체로 하는 방법이 있었네
// 조작 > 재귀 > 되돌림 : 백트레킹 레파토리 & 시간복잡도를 개선한건아니지만 퍼포먼스 개선은 가능함
const solve2 = (n) => {
	let count = 0;
	const result = [];
	const jump = (len, circle, pos) => {
		if (Object.keys(circle).length === len) {
			count++;
			result.push({ ...circle });
		} else {
			const nextPos = (pos + circle[pos]) % len;
			if (!circle[nextPos]) {
				for (const target of Array(len)
					.fill(1)
					.map((el, i) => el + i)) {
					if (!Object.values(circle).includes(target)) {
						circle[nextPos] = target;
						jump(len, circle, nextPos);
						delete circle[nextPos];
					}
				}
			}
		}
	};
	for (let i = 2; i <= n; i++) {
		const circle = { 0: 1 };
		jump(i, circle, 0);
	}
	console.log(count);
	return result;
};

console.log(solve2(8));
