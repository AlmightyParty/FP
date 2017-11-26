// const g = n => n+1;
// const f = n => n*2;
// const e = n => n-1;

// var compose = function () {
// 	var args = arguments;
// 	var start = args.length - 1;
// 	return function() {
// 		var i = start;
// 		var result = args[start].apply(this, arguments);
// 		while (i--) result = args[i].call(this, result);
// 		return result;
// 	};
// };

// // 从右 => 左
// // console.log(compose(g,f)(10));
// console.log(compose(g,f,e)(10));
// // console.log(compose(a,b)('rrr'));
// const a = [];
// const b = [];
// a[a.length] = 42;
// a[a.length] = 42;
// a[a.length] = 42;
// a[a.length] = 42;
// a[a.length] = 42;
// console.log('a', a);

// b[b.length] = 42;
// b[b.length] = 42;
// b[b.length] = 42;
// b[b.length] = 42;
// console.log('b', b);
const ary = [1,2,3] 
const fn = (...lists) => {
	console.log('lists', ...lists);
	// const ary = ...lists;
	lists[0].push('4')
	console.log('ary',ary);
	// ...lists.push('4')
}
fn(1,2,3)
console.log('ary',ary);