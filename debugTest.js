function solution(tickets) {
	const obj = getObj(tickets);

	const result = [];
	const dfs = (name) => {
		result.push(name);
		if (!obj[name]) {
			return result;
		}

		for (const airport of obj[name]) {
			console.log(airport);
			dfs(airport);
		}
	};

	dfs("ICN");
}

const a = solution([
	["ICN", "SFO"],
	["ICN", "ATL"],
	["SFO", "ATL"],
	["ATL", "ICN"],
	["ATL", "SFO"],
]);

console.log(a, "123");

function getObj(tickets) {
	const obj = {};
	for (const ticket of tickets) {
		if (!obj[ticket[0]]) {
			obj[ticket[0]] = [ticket[1]];
		} else {
			obj[ticket[0]].push(ticket[1]);
		}
	}

	for (const key in obj) {
		obj[key] = obj[key].sort();
	}

	return obj;
}
