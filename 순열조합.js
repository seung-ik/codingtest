// input : [1,2,3,4]
// output : [[1,2,3],[1,3,4],[1,2,4],[2,3,4]]

const getCombination = (arr, selectNum) => {
	const result = [];

	if (selectNum === 1) return arr.map((el) => [el]);

	for (let i = 0; i < arr.length; i++) {
		const rest = arr.slice(i + 1);
		const combinations = getCombination(rest, selectNum - 1);
		const attached = combinations.map((el) => [arr[i], ...el]);
		result.push(...attached);
	}

	return result;
};

const 조합 = getCombination([1, 2, 3, 4, 5], 4);
console.log(조합);

const getPermutation = (arr, selectNum) => {
	const result = [];

	if (selectNum === 1) return arr.map((el) => [el]);

	for (let i = 0; i < arr.length; i++) {
		const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
		const permutation = getPermutation(rest, selectNum - 1);
		const attached = permutation.map((el) => [arr[i], ...el]);

		result.push(...attached);
	}

	return result;
};

const 순열 = getPermutation([1, 2, 3, 4], 3);
console.log(순열);

function getDupComb(arr, num) {
	const result = [];

	if (num === 1) {
		return arr.map((el) => [el]);
	}

	for (let i = 0; i < arr.length; i++) {
		const combination = getDupComb(arr, num - 1);
		const attached = combination.map((el) => [arr[i], ...el]);

		result.push(...attached);
	}

	return result;
}

const 중복조합 = getPermutation([1, 2, 3, 4], 3);
console.log(중복조합);
