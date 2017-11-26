const Container = function (x) {
  this.value = x;
}
Container.of = x => new Container(x);
// console.log(new Container('2'));
// console.log(Container.of('2'));

Container.prototype.map = function (f) {
  return Container.of(f(this.value))
}
var data = Container.of(3).map(x => x + 1).map(x => `result is ${x}`)
// console.log('data', data);


/**
 *  MapBe
 */
const _ = require('lodash');
var Maybe = function (x) {
  this.__value = x;
}

Maybe.of = function (x) {
  return new Maybe(x);
}

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined);
}


// console.log(_.add(10, 20))
var add = _.curry(_.add);

Maybe.of({ name: "Stark" })
  .map(_.property("age"))
  .map(add(10));
//=> Maybe(null)

const data1 = Maybe.of({ name: "Stark", age: 21 })
  .map(_.property("age"))
  .map(add(10));
// console.log('data', data1);

/**
 * 函数组合
 */

var compose = _.flowRight;
var add = _.curry(_.add);

const composeFn = compose(add(10), _.property("age"));
var data2 = Maybe.of({ name: "Stark", age: 21 })
  .map(composeFn)
console.log('data2', data2);



// // 创造一个柯里化的 map
// var map = _.curry((f, functor) => functor.map(f));

// var doEverything = map(compose(add(10), _.property("age")));

// var functor = Maybe.of({ name: "Stark", age: 21 });
// doEverything(functor);


/**
 * 处理肮脏的时间
 */

function readLocalStorage() {
  return window.localStorage;
}


var IO = function (f) {
  this.__value = f;
}
// 这边是不是写错了
IO.of = x => new IO(_ => x);

IO.prototype.map = function (f) {
  return new IO(compose(f, this.__value))
};
