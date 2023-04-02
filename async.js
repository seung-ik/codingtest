function setTimeoutPromise(delay) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(delay), delay);
	});
}
async function startAsync(age) {
	if (age > 20) return `${age} success`;
	else throw new Error(`${age} is not over 20`);
}

function noasync() {
	return "10";
}
async function startAsyncJobs() {
	const k = await setTimeoutPromise(1000);
	console.log(k, "k");
	k.then((res) => {
		console.log(res, "kkk");
	});
	const promise1 = startAsync(25);
	console.log("promise1", promise1);
	const b = await noasync();
	console.log(b);
	try {
		const value = await promise1;
		console.log(value);
	} catch (e) {
		console.error(e);
	}
	const promise2 = startAsync(15);
	try {
		const value = await promise2;
		console.log(value);
	} catch (e) {
		console.error(e);
	}
}
// startAsyncJobs();
// 분리;
async function prepareOneFish(time) {
	let start = new Date().getTime();
	while (new Date().getTime() < start + time) {
		// preparing fish
	}
	return "finished" + time;
}
console.log("Start!");
setTimeoutPromise(3000).then(console.log);
setTimeoutPromise(1000).then(console.log);
setTimeoutPromise(2000).then(console.log);
prepareOneFish(3000).then(console.log);
prepareOneFish(1000).then(console.log);
prepareOneFish(2000).then(console.log);
console.log("Finish!");

// 분리
// console.log("script start");
// setTimeout(function () {
// 	console.log("setTimeout");
// }, 0);

// Promise.resolve()
// 	.then(function () {
// 		console.log("promise1");
// 	})
// 	.then(function () {
// 		console.log("promise2");
// 	});

// console.log("script end");
