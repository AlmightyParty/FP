const R = require('ramda');
var double = x => x * 2;

// console.log(R.map(double, [1, 2, 3])); //=> [2, 4, 6]

// console.log(R.map(double, { x: 1, y: 2, z: 3 })); //=> {x: 2, y: 4, z: 6}


// 练习 1:
// ============
// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
var CARS = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
  { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
  { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: 'rrr' }
];
// var isLastInStock = function (cars) {
//   var last_car = R.last(cars);
//   console.log(last_car);
//   return R.prop('in_stock', last_car);
// };
// // console.log( isLastInStock(CARS))
// // const prop = (last_car)=>{
// //   return R.prop('in_stock', last_car)
// // }
// const test1 = R.compose(R.prop('in_stock'),R.last)
// console.log(test1(CARS))

/**
 * 并行
 */
const fn1 = () => {
  // console.log('33333');
  // return 'sssss'
  setTimeout(function () {
    console.log('rrr');
  }, 1000);
}
const fn2 = (content) => {
  console.log(content);
}
const test1 = R.compose(fn2, fn1);
// test1()
//

/**
 * 传行 只能执行两个函数 那就没意思了
 */
var duplicate = n => [n, n];
// console.log(R.chain(duplicate)); //=> [1, 1, 2, 2, 3, 3]
const fnn1 = (content) => {
  console.log('11111111');
  return 
  return () => {
    return 'rrrr'
    console.log('111', content);
  }
}
const fnn2 = (content) => {
  console.log('content', content);
  return content
}
const fn3 = (content) => {
  console.log('33333', content);
  return content
  return () => {
    console.log('333', content);
  }
}
// console.log(R.chain(fnn1, fn3)([1, 2, 3]))
// console.log(R.chain(R.append, R.head)([1, 2, 3])); //=> [1, 2, 3, 1]

const g = n => setTimeout(function() {
  console.log('1',n);
 return n + 1
}, 1000); 
const f = n => setTimeout(function() {
  console.log('2',n);
  return n * 2;
}, 2000); 
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
// pipe(g, f)(20);






// bind 第一个参数是改变this指向
/*var bar = function(){
  var args =  Array.from(arguments);
  console.log(args);
	console.log(this.x);
}
var foo={
	x:3
}*/

