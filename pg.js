const pg = require('promise-generator')

const promises = [() => {
	return Promise.resolve(0)
}, () => {
	return new Promise((resolve) => {
		resolve(1)
	})
}, () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(2)
		}, 100)
	})
}, () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(3)
		}, 100)
	})
}, () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(4)
		}, 100)
	})
}]

pg(promises).then((data) => {
	console.log(data); // 300ms+之后输出：[0,1,2,3,4]
})