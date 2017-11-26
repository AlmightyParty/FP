/**
 * curry 预加载参数;
 */
const add = (a, b) => {
	return a + b;
}

add.bind(null, 1).bind(null, 2)(); // => 3
add.bind(null, 1).bind(null, 3)(); // => 4
add.bind(null, 1)(2); // => 3


/*
 * 如何实现一个简单bind
 * 缺陷：只能一次预加载参数；
 * 函数的bind
 * */

// var curry = function (fn) {
// 	var args = [].slice.call(arguments, 1);
// 	return function () {
// 		var newArgs = args.concat([].slice.call(arguments, 1));
// 		return fn.apply(this, newArgs);
// 	};
// };
// var curry = (fn, ...args) => (...arguments) => fn.apply(this, [...args, ...arguments])


var curry = (fn, ...args) => (...arguments) => fn(...args, ...arguments);

var addCurry = curry(add, 1, 2);
var addCurry1 = curry(add);
var addCurry2 = curry(add, 1);
console.log(addCurry());
console.log(addCurry1(1, 2));
console.log(addCurry2(2));
// addCurry() //=>3


/***
 * 多次预加载参数
 * curry(fn)()()()()()
 * curry1(add)(1)(2)
 * PS:获取函数的参数总个数 和 已经获取的参数个数进行对比不停的递归
 */

function curry1(fn, args) {
	var length = fn.length;
	args = args || [];
	return function (...arguments) {
		args = [...args, ...arguments];
		return args.length < length ? curry1.call(this, fn, args) : fn.apply(this, args);
	}
}

console.log(curry1(add)(1)(2));

/**
 * 实战
 */

function ajax(type, url, data) {
	var xhr = new XMLHttpRequest();
	xhr.open(type, url, true);
	xhr.send(data);
}

// 虽然 ajax 这个函数非常通用，但在重复调用的时候参数冗余
ajax('POST', 'www.test.com', "name=kevin")
ajax('POST', 'www.test2.com', "name=kevin")
ajax('POST', 'www.test3.com', "name=kevin")

// 利用 curry
var ajaxCurry = curry(ajax);

// 以 POST 类型请求数据
var post = ajaxCurry('POST');
post('www.test1.com', "name=kevin");
post('www.test2.com', "name=kevin");

// 以 POST 类型请求来自于 www.test.com 的数据
var postFromTest = post('www.test.com');
postFromTest("name=kevin");
postFromTest("name=xxx");

/**
 * curry 的这种用途可以理解为：预加载参数，参数复用，提高适用性。
 * 当时正真完全用函数式思想写代码的时候，柯里化是非常常见的；
 */