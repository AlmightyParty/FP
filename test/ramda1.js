const R = require('ramda');
// var getChildren = function(x) {
// 	console.log('x',x)
// 	return x.childNodes;
// };
//
// // var allTheChildren = map(getChildren);
//
// R.map(double, [1, 2, 3]); //=> [2, 4, 6]
//
// R.map(getChildren, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
// R.map('rr', getChildren);
// 非 pointfree，因为提到了数据：name
// const compose = R.compose
// var initials = function (name) {
// 	return name.split(' ').map(compose(toUpperCase, head)).join('. ');
// };
// console.log(initials('rrrr'))
// pointfree
// var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));
//
// initials("hunter stockton thompson");
 // R.compose(R.toUpper, classyGreeting);

function compose() {
	var args = arguments;
	var start = args.length - 1;
	return function() {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
		return result;
	};
};
// const fn1 = (par)=>{
// 	console.log(par)
// 	return par
// };
// const fn2 = (par)=>{
// 	console.log(par)
// 	return par
// };
// compose(fn1,fn2)(10)
var fn = (itemData)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(function() {
			itemData = `${itemData}00000000000`;
			resolve(itemData)
		}, 1000);
	})
};
var fn1 = (itemData)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(function() {
			resolve(itemData)
		}, 1000);
	})
};
var  arr = [fn,fn1];

arr.reduce((content,fn)=>{
	return content.then((content)=>{
		return fn(content)
	})
},Promise.resolve('rrrrrrrrr'));
// console.log(data)