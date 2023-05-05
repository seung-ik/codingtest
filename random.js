function generateRandomArray(n) {
	const length = 2 * n + 1;
	const array = Array(length).fill(0);
	const randomSet = new Set();

	for (let i = 0; i < array.length - 1; i = i + 2) {
		const randomNum = getRandom(-7, 7);

		if (randomSet.has(randomNum)) {
			i = i - 2;
		} else {
			randomSet.add(randomNum);
			array[i] = randomNum;
			array[i + 1] = randomNum;
		}
	}

	while (randomSet.size < length) {
		const randomNum = getRandom(-7, 7);
		array[length - 1] = randomNum;
		randomSet.add(randomNum);
	}
	console.log(array);
	return shuffle(array);
}

function shuffle(_array) {
	for (let i = _array.length - 1; i > 0; i--) {
		const idx = Math.floor(Math.random() * (i + 1));
		[_array[i], _array[idx]] = [_array[idx], _array[i]];
	}
	return _array;
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const res = generateRandomArray(6);
console.log(res);
