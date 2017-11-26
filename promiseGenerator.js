function promiseGenerator(arr) {
	const data = [];
	const last = Symbol('last');

	// 添加迭代队列，以获取最后一次的promise执行结果
	arr.push(last);

	return arr.reduce((sum, value, index) => {
		return sum.then((result) => {
			// 忽略初始数据，即Promise.resolve()的返回数据
			if (index !== 0) data.push(result);

			// 如果到最后一个节点，则完成迭代，返回总体数据
			if (value === last) return data;

			return value(result);
		})
	}, Promise.resolve())
}
module.exports = promiseGenerator;

// const promises = [() => {
// 	return Promise.resolve(0)
// }, (content) => {
// 	return new Promise((resolve) => {
// 		resolve(`${content}1`)
// 	})
// }, (content) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(`${content}2`)
// 		}, 100)
// 	})
// }, (content) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(`${content}3`)
// 		}, 100)
// 	})
// }, (content) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(`${content}4`)
// 		}, 1000)
// 	})
// }]
// console.time('time')
// promiseGenerator(promises).then((data)=>{
// 	console.timeEnd('time')
// 	console.log(data)
// })