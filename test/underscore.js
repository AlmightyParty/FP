const _ = require('underscore');
//  console.log( _.range(3,10))
// const fn = (func,params) => {
//   return function name() {
//     return func(params)
//   }
// }
// [1,2,3].reduce((content,arg)=>{
//   return content.then((content)=>{
//     return content(arg)
//   })
// },Promise.resolve('rrr'))
// 重复复用几次 命令式的  可变部分进行抽象 不可变分就行隔离
/**
 * 几次 内容 重复是不可变的
 */

// var ary = []
// for (var index = 0; index < 10; index++) {
//   // ary.push(index)
//   ary = [...ary ,index]
// }
// console.log(ary);

const repeat = (times, fun) => {
  return _.map(_.range(times), fun)
}
// 尽量不要使用匿名函数 
const data = repeat(2, () => {
  return 'rrr'
})
// console.log('data', data);
//  为什么会有 awalys 这样的格式
const awalys = (value) => {
  return () => {
    return value
  }
}
const data1 = repeat(2, awalys('eeeee'))
// console.log('data1',data1);
// _.rest
// console.log(_.rest([5, 4, 3, 2, 1]))
// => [4, 3, 2, 1]
const test1 =function () {
  const arg = _.rest(arguments)
  console.log('arg',arg);
}
const test2 = ()=>{
  console.log('rrrr');
}
// test1(test2)











// var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
// var youngest = _.chain(stooges)
//   .sortBy(function(stooge){ 
//     console.log('1',stooges);
//     return stooge.age; })
//   .map(function(stooge){ 
//     console.log('2',stooges);
//     return stooge.name + ' is ' + stooge.age; })
//   .first()
//   .value();

var compose = function () {
	var args = arguments;
	var start = args.length - 1;
	return function() {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
		return result;
	};
};

// compose(a,b)('rrr').then((res)=>{
// 	console.log(res)
// });

// 从右 => 左
// console.log(compose(g,f)(10));
// console.log(compose(g,f,e)(10));
// console.log(compose(a,b)('rrr'));
