function solution(order) {
	let num = 1;
	const stack = [];
	let idx = 0;
	let count = 0;
	while (true) {
		if (stack[stack.length - 1] !== num && idx > order.length - 1) {
			return count;
		}
		if (stack[stack.length - 1] === num) {
			stack.pop();
			count++;
			num++;
			continue;
		}
		if (order[idx] === num) {
			idx++;
			count++;
			num++;
		} else {
			stack.push(order[idx]);
			idx++;
		}
	}
}

console.log(solution([4, 3, 1, 2, 5]));
