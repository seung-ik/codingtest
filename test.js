function solution(msg) {
	msg = msg.toUpperCase();
	let alpa = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const result = [];

	let nextIdx = 2;
	let idx = 0;

	while (idx < msg.length) {
		const nextword = msg.slice(idx, idx + nextIdx).split("");
		if (idx + nextIdx - 2 === msg.length - 1) {
			const word = nextword.join("");
			result.push(alpa.indexOf(word));
			idx = idx + nextIdx - 1;
		}
		if (!alpa.includes(nextword.join(""))) {
			alpa.push(nextword.join(""));
			console.log(nextword.join(""), "next");
			nextword.pop();
			const word = nextword.join("");
			console.log(word, "now");
			result.push(alpa.indexOf(word));
			idx = idx + nextIdx - 1;
			nextIdx = 2;
		} else {
			nextIdx++;
		}
	}

	return result;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34];
