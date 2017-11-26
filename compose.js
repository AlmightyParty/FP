/**
 * 函数组装以便顺序执行
 * 1:回调  
 * 2:promise then
 * 3:async await
 */

const g = n => n + 1;
const f = n => n * 2;
const e = n => n - 1;

const gData = g(10);
const fData = f(gData)
console.log('fData', fData);
/**
 *  从右到左执行  f(g(x))  || g(f(x))  本质：从内到外的执行
 *  缺点：只支持两个函数组合。
 * @param f
 * @param g
 * @returns {Function}
 */

var compose = function (f, g) {
	return function (x) {
		return f(g(x));
	};
};
console.log(compose(f, g)(10));
console.log(compose(g, compose(f, e))(10));

// 这是两个函数组装，如果多个呢？ compose(d, compose(c, compose(b, a)))  太难读了
// compose(d, c, b, a)


/**
 * 函数式编程库
 *  underscore 的 compose函数式编程库
 *  lodash/fp
 *  ramda.js
 *  倒叙
 * */



var compose = function () {
	var args = arguments;
	var start = args.length - 1;
	return function () {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
		return result;
	};
};


// 从右 => 左
console.log(compose(g, f)(10));
console.log(compose(g, f, e)(10));


/* 注意这当中的回调函数 (prev, curr) => prev + curr
 * 与我们redux当中的reducer模型 (previousState, action) => newState
 */

[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
var compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
//
// var compose = function (...fns){
// 	return function (x) {
// 		return fns.reduce(function (acc,fn) {
// 			fn(acc)
// 		},x)
// 	}
// };

// pipe(a,b)('rrr').then((res)=>{
// 	console.log(res)
// });

console.log(pipe(g, f)(10));
console.log(compose(g, f)(10));


/**
 * 异步怎么处理呢
 * */
const init = () => Promise.resolve(10);
const a = (content) => {
	return new Promise((resovle, reject) => {
		setTimeout(() => {
			resovle(`${content}NNN`)
		}, 1000)
	})
};

const b = (content) => {
	return new Promise((resovle, reject) => {
		setTimeout(() => {
			resovle(`${content}MMM`)
		}, 1000)
	})
};


const pg = require('promise-generator');
pg([init, a, b]).then((data) => {
	console.log('promise-generator',data);
});


const promiseGenerator = require('./promiseGenerator')
promiseGenerator([init, a, b]).then((res) => {
	console.log(res)
})

/**
 * 到现在 两个函数中有异步的和没有异步的都已经处理OK了 总结一下：顺序处理函数的都可以通过这种方式去实现
 */