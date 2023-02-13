// 백트래킹 send + more = money 형태의 숫자대입
// const digit = [...Array(10)].map((v, i) => i);
// const words = [...new Set((word1 + word2 + word3).split(""))].sort();
function toInt(w, map) {
	let value = 0;
	for (let i = 0; i < w.length; i++) {
		value += map[w[i]] * 10 ** i;
	}
	return value;
}

function promising(i, map, s1, s2, s3) {
	const n = 10 ** (i + 1);
	const a = toInt(s1, map);
	const b = toInt(s2, map);
	const c = toInt(s3, map);
	return (a + b) % n === c % n;
}

function isValid(r1, r2, r3, map) {
	const word1 = r1.split("").reverse().join("");
	const word2 = r2.split("").reverse().join("");
	const word3 = r3.split("").reverse().join("");

	if (map[word1[0]] === 0 || map[word2[0]] === 0 || map[word3[0]] === 0) return false;

	const a = toInt(r1, map);
	const b = toInt(r2, map);
	const c = toInt(r3, map);

	return a + b === c;
}
function solveTo(n, i, map, solved, r1, r2, r3) {
	if (n === i && isValid(r1, r2, r3, map)) {
		console.log("//");
		solved.push(map);
	}

	if (n !== i) {
		const s1 = r1.slice(0, i + 1);
		const s2 = r2.slice(0, i + 1);
		const s3 = r3.slice(0, i + 1);
		const letters = [...new Set((s1[i] + s2[i] + s3[i]).split("").filter((e) => !Object.keys(map).includes(e)))];
		const digits = [...Array(10)].map((v, i) => i).filter((e) => !Object.values(map).includes(e));

		const perms = getPermutation(digits, letters.length);
		for (const perm of perms) {
			const newMap = { ...map };
			perm.forEach((digit, index) => {
				newMap[letters[index]] = digit;
			});

			if (promising(i, newMap, s1, s2, s3)) {
				solveTo(n, i + 1, newMap, solved, r1, r2, r3);
			}
		}
	}
	return solved;
}

function solve(word1, word2, word3) {
	const r1 = word1.split("").reverse().join("");
	const r2 = word2.split("").reverse().join("");
	const r3 = word3.split("").reverse().join("");

	const n = Math.max(word1.length, word2.length);
	const result = solveTo(n, 0, {}, [], r1, r2, r3);

	return result;
}

function getPermutation(arr, num) {
	const result = [];
	if (num === 1) {
		return arr.map((el) => [el]);
	}
	for (let i = 0; i < arr.length; i++) {
		const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
		const permutation = getPermutation(rest, num - 1);
		const attached = permutation.map((el) => [arr[i], ...el]);
		result.push(...attached);
	}
	return result;
}
// const result = solve("send", "more", "money");
// const result = solve("wrong", "wrong", "right");
const result = solve("donald", "gerald", "robert");
console.log(result, result.length);
// 조합최적화
// 순열 조합 > 최적화 (백트레킹) 백트레킹 : dfs 에서 promising한 가지만 찾는방식
