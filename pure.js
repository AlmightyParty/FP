/**
 * curry 预加载参数;
 */
const add = (a, b) => {
	return a + b;
}

function curry1(fn, args) {
	var length = fn.length;
	args = args || [];
	return function (...arguments) {
		args = [...args, ...arguments];
		// return args.length < length ? curry1.call(this, fn, args) : fn.apply(this, args);
		return args.length < length ? curry1.call(this, fn, args) : fn(...args,...arguments);
	}
}

console.log(curry1(add)(1)(2));
