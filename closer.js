// const tabs = document.querySelectorAll(".tabs");

// function tabsHandler(index) {
// 	return function tabClickEvent(event) {
// 		console.log(event);
// 		console.log(index + 1);
// 	};
// }

// for (var i = 0; i < tabs.length; i += 1) {
// 	tabs[i].onclick = tabsHandler(i);
// }

const tabs = document.querySelectorAll(".tabs");

for (var i = 0; i < tabs.length; i += 1) {
	tabs[i].onclick = function (event) {
		console.log(event);
		console.log(i + 1);
	};
}
